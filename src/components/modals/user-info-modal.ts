import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "../buttons/standard-button";
import "./modal-dialog";
import "../form/UserForm";

@customElement("user-info-modal")
export class UserInfoModal extends LitElement {
  @state() isOpen: boolean = false;

  _handleOpen() {
    this.isOpen = true;
  }

  _handleClose() {
    this.isOpen = false;
  }

  protected render() {
    return html`
      <standard-button
        @click="${this._handleOpen}"
        ?hidden=${this.isOpen}
        label="Open Modal"
      >
      </standard-button>
      <modal-dialog
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend magna eu libero mattis dictum. Donec maximus suscipit ante, id eleifend nisi vulputate sed."
        ?isOpen=${this.isOpen}
        @handleClose="${this._handleClose}"
      >
        <user-form @handleClose="${this._handleClose}"></user-form>
      </modal-dialog>
    `;
  }
}
