import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../modals/modal-dialog";
import "./inputs/standard-input";
import "../buttons/outline-button";
import "../icons/send-icon";

@customElement("user-form")
export class UserModal extends LitElement {
  static styles = css`
    .userFormContainer {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .userForm {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `;

  _handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  render() {
    return html`
      <div class="userFormContainer">
        <div class="userForm">
          <standard-input
            label="Name"
            placeholder="Example: John Doe"
            required
          ></standard-input>
          <standard-input
            label="Email"
            placeholder="Example: john.doe@example.com"
            required
          /></standard-input>
          <standard-input
            label="Favorite number"
            placeholder="Example: 8"
          ></standard-input>
        </div>
        <div class="buttons">
          <outline-button label="Cancel" id="cancel-button" @click="${this._handleClose}"></outline-button>
          <standard-button id="close-modal-button" label="Send">
            <send-icon slot="icon-right"size="small" color="white"></send-icon>
          </standard-button>
        </div>
      </div>
    `;
  }
}
