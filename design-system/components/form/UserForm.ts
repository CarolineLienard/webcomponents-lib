import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import "../modals/modal-dialog";
import "../form/inputs/standard-input";
import "../buttons/outline-button";

@customElement("user-info-modal")
export class UserModal extends LitElement {
  static styles = css`
    .modal {
      visibility: var(--open);
    }
    .userForm {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;

  @property({ type: Boolean }) isOpen: boolean = false;

  render() {
    return html`
     <style>
        :host {
          --open : ${this.isOpen ? "visible" : "hidden"}
        }
      </style>
      <modal-dialog class="modal" >
        <div class="userForm">
          <standard-input
            label="Name"
            placeholder="Example: John Doe"
          ></standard-input>
          <standard-input
            label="Email"
            placeholder="Example: john.doe@example.com"
          /></standard-input>
          <standard-input
            label="Favorite number"
            placeholder="Example: 8"
          ></standard-input>
        </div>
        <outline-button label="Cancel" id="cancel-button"></outline-button>
        <standard-button id="close-modal-button" label="Send"></standard-button>
      </modal-dialog>
    `;
  }
}
