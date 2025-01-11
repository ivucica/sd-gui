
import { html, css, LitElement } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import '@material/mwc-textfield';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item.js';

@customElement('lora-selector')
export class LoraSelector extends LitElement {
  static styles = css`
    /* Add your styles here */
  `;

  @property({ type: Array }) loras: any[] = [];
  @state() private selectedLoras: any[] = [];

  handleLoraDragStart(event: DragEvent, lora: any) {
    event.dataTransfer?.setData('lora', JSON.stringify(lora));
  }

  handleLoraDrop(event: DragEvent) {
    event.preventDefault();
    const lora = JSON.parse(event.dataTransfer?.getData('lora') || '{}');
    this.selectedLoras = [...this.selectedLoras, { ...lora, weight: 0.8 }];
    this.dispatchEvent(new CustomEvent('selected-loras-changed', {
      detail: this.selectedLoras
    }));
  }

  handleLoraWeightChange(event: any, index: number) {
    const newWeight = parseFloat(event.target.value);
    this.selectedLoras[index].weight = newWeight;
    this.dispatchEvent(new CustomEvent('selected-loras-changed', {
      detail: this.selectedLoras
    }));
  }

  render() {
    return html`
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
    `;
  }
}