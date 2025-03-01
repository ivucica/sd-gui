# sd-ui: Alternative UI for automatic1111-compatible API

Learning project for Typescript + Lit etc development.

```bash
npm run build;  npm run start-via-devserver-dist
```

Consider replacing `sd-openapi.json` with one downloaded from your automatic1111
instance and regenerating the sd-api-client.

Note: Some of learning was done by seeing what an LLM produces, and working back
from that including filling in the gaps by looking things up online (such as
having to set up `--node-resolve` etc).

Note: `/sdapi/v1/loras` endpoint includes all metadata and can be very resource
intensive (the returned JSON was 31MB on the author's instance). A patch that
can produce a new endpoint to fix this by allowing passing a filter follows:

```patch
diff --git a/extensions-builtin/Lora/scripts/lora_script.py b/extensions-builtin/Lora/scripts/lora_script.py
index d3ea369a..6b5c02d4 100644
--- a/extensions-builtin/Lora/scripts/lora_script.py
+++ b/extensions-builtin/Lora/scripts/lora_script.py
@@ -50,18 +50,88 @@ shared.options_templates.update(shared.options_section(('compatibility', "Compat
 }))
 
 
-def create_lora_json(obj: network.NetworkOnDisk):
-    return {
+from typing import Optional, Any, Annotated
+from pydantic import BaseModel, Field
+from fastapi import Query
+
+
+class LoraApiJSON(BaseModel):
+    name: str = Field(examples=["add_details"])
+    alias: str = Field(examples=["add_details"])
+    path: Optional[str] = Field(examples=["/stable-diffusion/models/Lora/add_details.safetensors"])
+    metadata: Optional[dict[str, Any]] = Field(examples=[{"ss_sd_model_name":"runwayml/stable-diffusion-v1-5"}])
+
+
+import sys
+def create_lora_json(obj: network.NetworkOnDisk, with_path: bool = True, metadata_filter: Optional[str] = None):
+    # note: returned dict will conform to LoraApiJSON and get translated accordingly by pydantic / fastapi
+    r = {
         "name": obj.name,
         "alias": obj.alias,
         "path": obj.filename,
         "metadata": obj.metadata,
     }
+    if not with_path:
+        del r["path"]
+
+    if metadata_filter is not None:
+        def filtered_copy(filterable: dict[str, Any], keepables: list[str], depth: int = 0):
+            """Return a shallow copy filtered using fieldpaths in keepables."""
+            # loop detection should not be a problem since json encoding would already explode here.
+
+            new_m = {}
+            for k, v in filterable.items():
+                # If at least one fieldmask is matched, do a shallow copy into
+                # the new dict.
+                for keepable in keepables:
+                    if k == keepable:
+                        new_m[k] = v
+                        break
+                    if keepable.startswith(f"{k}."):
+                        # If it is not a dict, user will see an unfriendly
+                        # error. Might want to tackle that.
+                        new_m[k] = filtered_copy(v, [kp[len(k)+1:] for kp in keepables], depth+1)
+                        break
+            return new_m
+
+        # Split passed string by commas to obtain a list of fieldpaths.
+        #
+        # Fieldpaths have the shape "key1.key2.key3". Currently there's
+        # no support for extracting subsets of iterables.
+        keep = metadata_filter.split(",")
+        r["metadata"] = filtered_copy(obj.metadata, keep)
+
+        if not r["metadata"]:
+            del r["metadata"]
+            # print("metadata was empty, making unset", file=sys.stderr)
+
+    return r
 
 
 def api_networks(_: gr.Blocks, app: FastAPI):
+    @app.get("/sdapi/v1/loras_filterable", response_model_exclude_unset=True)
+    async def get_loras_filterable(
+            with_path: Annotated[bool, Query(title="With path", description="Whether to include 'path' in the response.")]=False,
+            metadata_filter: Annotated[Optional[str], Query(title="Metadata filter", description="A comma separated list of 'fieldpaths' which are permitted to stay inside the metadata dict. Each of these consists of dict keys separated by dots, such as 'ss_something.or_other.3'. Omitting the argument disables filtering by metadata, while an empty string omits the metadata dict entirely.")]=None) -> list[LoraApiJSON]:
+        """Alternative endpoint for getting loras, with exclusion of unimportant arguments.
+
+        For instance, path defaults to being omitted, and metadata filter allows passing fieldmasks
+        similar to the idea behind standard 'fields' argument in:
+
+        * https://web.archive.org/web/20220318065415/https://cloud.google.com/apis/docs/system-parameters
+        * https://google.aip.dev/157
+
+        Args:
+          with_path: Whether to include 'path' in the response.
+          metadata_filter: A comma separated list of 'fieldpaths'.
+
+        Returns:
+          list of dicts, information about Loras available to users
+        """
+        return [create_lora_json(obj, with_path=with_path, metadata_filter=metadata_filter) for obj in networks.available_networks.values()]
+
     @app.get("/sdapi/v1/loras")
-    async def get_loras():
+    async def get_loras() -> list[LoraApiJSON]:
         return [create_lora_json(obj) for obj in networks.available_networks.values()]
 
     @app.post("/sdapi/v1/refresh-loras")
```

## Interesting endpoints

See most of them at `/docs`.

### `/sdapi/v1/loras` / `/sdapi/v1/loras_filterable`

Nearly identical endpoints, the latter added by the patch documented above.

These list all available loras.

### `/file=/path/to/stable-diffusion-webui/extensions/a1111-sd-webui-tagcomplete/tags/temp/lora.txt`

Added by the a1111-sd-webui-tagcomplete extension. Lists just hashes and names
of LoRAs. CSV. Exact path presumably obtainable by fetching config from 
`/sdapi/v1/cmd-flags` from `data_dir` . (`/config` gives the entire Gradio UI
layout, `/sdapi/v1/options` gives user configurable options.)

Based on timestamp, likely generated at startup. Possibly sufficient if
available, in place of `loras_filterable`.

Also: `hyp.txt`, `lyco.txt`, `emb.txt`.

`model-keyword` extension writes `lora-keyword.txt` into its directory as well
with pipe-separated keywords that can be used for a lora, prefixed by model hash
and comma and space.

### `/sdapi/v1/progress?skip_current_image=false`

Contains job ID, timestamp, and `current_image` as the preview.

#### `/internal/progress`

ID obtained can be used with `/internal/progress` as well, until completion.
That progress endpoint has a dataurl with image preview in `live_preview` arg,
but its POST has `id_task` of the task/job ID, `id_live_preview` set to e.g.
`-1` or to `false`, or sequentially incrementing with each request whereupon the
reply will repeat that number.

### `/sdapi/v1/txt2img`

Main api. Not tested: how the result is received.

Allows forcing a task ID.

### `/queue/join`

WebSockets endpoint. Seemingly used to just receive a live notification of a
response. Gradio internal, likely.
