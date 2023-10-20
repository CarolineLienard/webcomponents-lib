import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "../buttons/standard-button";
import "../form/UserForm";
import "../modals/modal-dialog";

@customElement("open-modal")
export class OpenModal extends LitElement {
  
  @state() private isOpen = false;

  _handleClick() {
    console.log("je me déclenche");
    this.isOpen = true;
  }

  protected render() {
    return html`
      <standard-button
        @click="${this._handleClick}"
        label="Open Modal"
      ></standard-button>
      <modal-dialog ?isOpen=${this.isOpen}>
        <user-form></user-form>
      </modal-dialog>
    `;
  }
}
