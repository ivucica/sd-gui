import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Configuration, DefaultApi } from './sd-api-client';
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

@customElement('text2img-app')
export class Text2imgApp extends LitElement {
  // ... (properties and states from previous example)

  private api = new DefaultApi(new Configuration({ basePath: 'http://your-api-endpoint' }));

  // ... (other methods from previous example)

  render() {
    return html`
      <div>
        <mwc-select @selected="${this.handleModelChange}" label="Select Model">
          ${this.models.map((model) => html`
            <mwc-list-item value="${model.title}">${model.title}</mwc-list-item>
          `)}
        </mwc-select>

        <div>
          <h3>Available Loras</h3>
          <mwc-list @drop="${this.handleLoraDrop}" @dragover="${(event: any) => event.preventDefault()}">
            ${this.loras.map((lora) => html`
              <mwc-list-item
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
                  value="${lora.weight}"
                  @change="${(event: any) => this.handleLoraWeightChange(event, index)}"
                ></mwc-textfield>
              </mwc-list-item>
            `)}
          </mwc-list>
        </div>

        <mwc-textfield label="Prompt" @input="${(event: any) => this.prompt = event.target.value}"></mwc-textfield>
        <mwc-textfield label="Negative Prompt" @input="${(event: any) => this.negativePrompt = event.target.value}"></mwc-textfield>

        <mwc-button raised @click="${this.handleSubmit}">Submit</mwc-button>

        <div>Progress: ${this.progress * 100}%</div>

        ${this.generatedImage && html`<img src="${this.generatedImage}" alt="Generated image">`}
      </div>
    `;
  }
}

