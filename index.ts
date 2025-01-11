/*
  a lit component for the stable diffusion app for running text2img
  
  the api is defined in sd-openapi.json

*/

// install npm from brew with brew install node
// install yarn with npm install -g yarn
// install openapi-generator-cli with brew install openapi-generator
//  or yarn add @openapitools/openapi-generator-cli
//  though that still requires java to be installed using brew install java
//  (then instead of npm run gen, we use npm run gen-via-npx)
// install typescript with yarn add typescript
// install lit with yarn add lit
// using relative paths does not help avoid that we have to use @web/dev-server: https://stackoverflow.com/a/56538969
//   (or webpack, or polymer-cli, openwebcomponents, ... https://stackoverflow.com/a/74592278 )
// to use @web/dev-server: yarn add @web/dev-server 
//   then add a script to package.json: "start": "web-dev-server --node-resolve"
import { html, css, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { render } from 'lit-html';

import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item.js';
import './lora-selector';

// Api generated with openapi-generator-cli generate -g typescript-fetch -i sd-openapi.json -o ./sd-api-client
// (Binary might be called openapi-generator)
import { Configuration, DefaultApi } from './sd-api-client';

@customElement('text2img-app')
export class Text2imgApp extends LitElement {
  static styles = css`
    /* Add your styles here */
  `;

  @state() private models: any[] = []; ;
  @state() private loras: any[] = [];
  @state() private selectedModel: any = null;
  @state() private selectedLoras: any[] = [];
  @state() private prompt: string = '';
  @state() private negativePrompt: string = '';
  @state() private iterations: number = 1;
  @state() private batchSize: number = 1;
  @state() private batchCount: number = 1;
  @state() private cfg: number = 7;
  @state() private width: number = 512;
  @state() private height: number = 512;
  @state() private progress: number = 0;
  @state() private generatedImage: string = '';

  private api = new DefaultApi(new Configuration({ basePath: 'http://10.0.64.161:7860' }));

  async firstUpdated() {
    this.models = await this.api.getSdModelsSdapiV1SdModelsGet();
    // If the api contains the filtered loras endpoint, use that instead,
    // as it will be faster. However this is not doable in Typescript, not
    // easily at least: https://github.com/microsoft/TypeScript/issues/449
    //
    // Let's pretend the new API exists.
    //if (this.api.getLorasSdapiV1LorasGetFiltered) {
      this.loras = await this.api.getLorasFilterableSdapiV1LorasFilterableGet({withPath: false, metadataFilter: 'no_metadata_for_now'});
    //}
    // if it doesn't, use the old one. We should use it in a try-catch block
    // anyway in case the client has it, but the server doesn't.
    // this.loras = await this.api.getLorasSdapiV1LorasGet();
  }

  handleModelChange(event: any) {
    this.selectedModel = event.target.value;
  }

  async handleSubmit() {
    const response = await this.api.text2imgapiSdapiV1Txt2imgPost({
        stableDiffusionProcessingTxt2Img: {
            prompt: this.prompt,
            negativePrompt: this.negativePrompt,
            // ... other parameters
        }
    });

    // See what we got back.
    console.log(response);
    // Omitting the rest for now.
    return;

    // Poll for progress and update the UI
    let skip = true;
    const intervalId = setInterval(async () => {
        const progressResponse = await this.api.progressapiSdapiV1ProgressGet({ skipCurrentImage: skip });
        this.progress = progressResponse.progress;

        if (progressResponse.progress > 5 && skip) {
            skip = false;
        }

        // render the image if not skipped; later we will want to move this to
        // a preview section
        this.generatedImage = progressResponse.currentImage;

        if (progressResponse.progress === 1) {
            clearInterval(intervalId);
            this.generatedImage = progressResponse.currentImage;
        }
    }, 500);
  }

  render() {
    return html`
      <div>
        <mwc-select label="Select Model" @selected="${this.handleModelChange}">
          ${this.models.map((model) => html`
            <mwc-list-item value="${model.title}">${model.title}</mwc-list-item>
          `)}
        </mwc-select>

        <lora-selector
          .loras="${this.loras}"
          @selected-loras-changed="${(e: CustomEvent) => {
            this.selectedLoras = e.detail;
          }}"
        ></lora-selector>

        <mwc-textfield
          label="Prompt"
          @input="${(event: any) => { this.prompt = event.target.value; }}"
        ></mwc-textfield>

        <mwc-textfield
          label="Negative Prompt"
          @input="${(event: any) => { this.negativePrompt = event.target.value; }}"
        ></mwc-textfield>

        <mwc-button raised @click="${this.handleSubmit}">Submit</mwc-button>

        <div>Progress: ${this.progress * 100}%</div>

        ${this.generatedImage ? html`<img src="${this.generatedImage}" alt="Generated image">` : ''}
      </div>
    `;
  }
}


