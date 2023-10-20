import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "../buttons/standard-button";
import "../form/UserForm";

@customElement("open-modal")
export class OpenModal extends LitElement {
  @state()
  _open = false;

  _handleClick() {
    this._open = true;
  }

  protected render() {
    return html`
      <standard-button
        @click="${this._handleClick}"
        label="Open Modal"
      ></standard-button>
      <user-info-modal ?isOpen=${this._open}></user-info-modal>
    `;
  }
}
