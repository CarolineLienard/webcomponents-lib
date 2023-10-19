import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("user-info-modal")
export class UserModal extends LitElement {
  static styles = css``;

  render() {
    return html`
      <modal-dialog style="visibility: hidden" id="my-modal">
        <standard-input
          label="Name"
          placeholder="Example: John Doe"
        ></standard-input>
        <standard-input
          label="Email"
          placeholder="Example: john.doe@example.com"
        ></standard-input>
        <standard-input
          label="Favorite number"
          placeholder="Example: 8"
        ></standard-input>
        <standard-button label="Cancel" id="cancel-button"></standard-button>
        <standard-button id="close-modal-button" label="Send"></standard-button>
      </modal-dialog>
    `;
  }
}
