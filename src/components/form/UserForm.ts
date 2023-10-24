import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
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

  @state() emailValue = "";
  @state() emailError = false;
  @state() emailErrorMessage = "";

  @state() nameValue = "";
  @state() nameError = false;
  @state() nameErrorMessage = "";

  @state() numberValue = "";
  @state() numberError = false;
  @state() numberErrorMessage = "";

  _handleCreateInput() {
    const shadowRoot = this.shadowRoot;
    if (shadowRoot) {
      const inputs = shadowRoot.querySelectorAll("standard-input");

      inputs.forEach((input) => {
        input.addEventListener("val-change", () => {});
      });
    }
  }

  firstUpdated() {
    this._handleCreateInput();
  }

  handleChange(e: any) {
    const { name, value } = e.detail;
    if (name === "email") {
      this.emailValue = value;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailRegex.test(value)) {
        this.emailError = false;
        this.emailErrorMessage = "";
      } else {
        this.emailError = true;
        this.emailErrorMessage = "Veuillez choisir un email valide";
      }
    } else if (name === "firstName") {
      this.nameValue = value;
    } else if (name === "number") {
      this.numberValue = value;
    }
  }

  _handleSubmit() {
    console.log(this.emailValue, this.nameValue, this.numberValue);
  }

  _handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  _handleDisabled() {
    if (
      this.emailValue.length > 0 &&
      !this.emailError &&
      this.nameValue.length > 0 &&
      !this.nameError &&
      !this.numberError
    ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return html`
      <form class="userFormContainer">
        <div class="userForm">
          <standard-input
            name="firstName"
            label="Name"
            placeholder="Example: John Doe"
            required
            @val-change="${this.handleChange}"
            .value=${this.nameValue}
            .errorMessage=${this.nameErrorMessage}
            ?error=${this.nameError}
          ></standard-input>
          <standard-input
            name="email"
            label="Email"
            placeholder="Example: john.doe@example.com"
            required
            @val-change="${this.handleChange}"
            .value=${this.emailValue}
            .errorMessage=${this.emailErrorMessage}
            ?error=${this.emailError}
          /></standard-input>
          <standard-input
            name="number"
            label="Favorite number"
            placeholder="Example: 8"
            @val-change="${this.handleChange}"
            .value=${this.numberValue}
            .errorMessage=${this.numberErrorMessage}
            ?error=${this.numberError}
          ></standard-input>
        </div>
        <div class="buttons">
          <outline-button label="Cancel" id="cancel-button" @click="${
            this._handleClose
          }"></outline-button>
          <standard-button ?isDisabled=${this._handleDisabled()} type="submit "id="close-modal-button" label="Send" @click="${
      this._handleSubmit
    }">
            <send-icon slot="icon-right" size="small" color=${
              this._handleDisabled()
                ? "var(--colorGlobalAllDisabledStrong)"
                : "var(--colorActionPrimaryContentInteracting)"
            }></send-icon>
          </standard-button>
        </div>
      </div>
    `;
  }
}
