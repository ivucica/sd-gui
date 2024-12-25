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


// Api generated with openapi-generator-cli generate -g typescript-fetch -i sd-openapi.json -o ./sd-api-client
// (Binary might be called openapi-generator)
import { Configuration, DefaultApi } from './sd-api-client';

@customElement('text2img-app')
export class Text2imgApp extends LitElement {
  static styles = css`
    /* Add your styles here */
  `;

  private api = new DefaultApi(new Configuration({ basePath: 'http://your-api-endpoint' }));
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


  async firstUpdated() {
    this.models = await this.api.getSdModelsSdapiV1SdModelsGet();
    this.loras = await this.api.getLorasSdapiV1LorasGet();
  }

  handleModelChange(event: any) {
    this.selectedModel = event.target.value;
  }

  handleLoraDragStart(event: any, lora: any) {
    event.dataTransfer.setData('lora', JSON.stringify(lora));
  }

  handleLoraDrop(event: any) {
    event.preventDefault();
    const lora = JSON.parse(event.dataTransfer.getData('lora'));
    this.selectedLoras = [...this.selectedLoras, { ...lora, weight: 0.8 }];
  }

  handleLoraWeightChange(event: any, index: number) {
    const newWeight = parseFloat(event.target.value);
    this.selectedLoras[index].weight = newWeight;
  }

  async handleSubmit() {
    const response = await this.api.text2imgapiSdapiV1Txt2imgPost({
        stableDiffusionProcessingTxt2Img: {
            prompt: this.prompt,
            negativePrompt: this.negativePrompt,
            // ... other parameters
        }
    });

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

        <div>
          <h3>Available Loras</h3>
          <mwc-list
            @drop="${this.handleLoraDrop}"
            @dragover="${(event: any) => event.preventDefault()}"
          >
            ${this.loras.map((lora) => html`
              <mwc-list-item
                graphic="avatar"
                draggable="true"
                @dragstart="${(event: any) => this.handleLoraDragStart(event, lora)}"
              >
                ${lora.name}
              </mwc-list-item>
            `)}
          </mwc-list>
        </div>

        <div>
          <h3>Selected Loras</h3>
          <mwc-list>
            ${this.selectedLoras.map((lora, index) => html`
              <mwc-list-item>
                <span>${lora.name}</span>
                <mwc-textfield
                  type="number"
                  label="Weight"
                  value="${lora.weight}"
                  @input="${(event: any) => this.handleLoraWeightChange(event, index)}"
                ></mwc-textfield>
              </mwc-list-item>
            `)}
          </mwc-list>
        </div>

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


