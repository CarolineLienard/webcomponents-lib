import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "../modals/modal-dialog";
import "./inputs/standard-input";
import "../buttons/outline-button";
import "../icons/send-icon";

@customElement("user-form")
export class UserForm extends LitElement {
  @state() emailValue = "";
  @state() emailError = false;
  @state() emailErrorMessage = "";

  @state() nameValue = "";
  @state() nameError = false;
  @state() nameErrorMessage = "";

  @state() numberValue = "";
  @state() numberError = false;
  @state() numberErrorMessage = "";

  @state() isSubmitted = false;

  static styles = css`
    .userFormContainer {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .userForm {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `;

  handleChange(e: CustomEvent) {
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
      const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,}$/;
      this.nameValue = value;
      if (nameRegex.test(value)) {
        this.nameError = false;
        this.nameErrorMessage = "";
      } else {
        this.nameError = true;
        this.nameErrorMessage = "Veuillez choisir un nom valide";
      }
    } else if (name === "number") {
      this.numberValue = value;
      const numberRegex = /^[0-9]+$/;
      if (this.numberValue.length === 0) {
        this.numberError = false;
      } else {
        if (numberRegex.test(value)) {
          this.numberError = false;
          this.numberErrorMessage = "";
        } else {
          this.numberError = true;
          this.numberErrorMessage = "Veuillez choisir un chiffre valide";
        }
      }
    }
  }

  handleSubmit() {
    this.isSubmitted = true;
    this.handleClose();
    this.dispatchEvent(
      new CustomEvent("form-submitted", {
        detail: { isSubmitted: this.isSubmitted, name: this.nameValue },
      })
    );
  }

  handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  handleDisabled() {
    return !(
      this.emailValue.length > 0 &&
      !this.emailError &&
      this.nameValue.length > 0 &&
      !this.nameError &&
      !this.numberError
    );
  }

  resetForm() {
    this.emailValue = "";
    this.nameValue = "";
    this.numberValue = "";
    this.isSubmitted = false;
  }

  render() {
    return html`
      <form class="userFormContainer" @reset-form="${this.resetForm}">
        <div class="userForm">
          <standard-input
            id="nameInput"
            name="firstName"
            label="Prénom"
            type="text"
            placeholder="Exemple: John Doe"
            required
            @val-change="${this.handleChange}"
            .value=${this.nameValue}
            .errorMessage=${this.nameErrorMessage}
            ?error=${this.nameError}
          ></standard-input>
          <standard-input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Exemple: john.doe@exemple.com"
            required
            @val-change="${this.handleChange}"
            .value=${this.emailValue}
            .errorMessage=${this.emailErrorMessage}
            ?error=${this.emailError}
          /></standard-input>
          <standard-input
            id="numberInput"
            name="number"
            label="Chiffre préféré"
            placeholder="Exemple: 8"
            type="text"
            @val-change="${this.handleChange}"
            .value=${this.numberValue}
            .errorMessage=${this.numberErrorMessage}
            ?error=${this.numberError}
          ></standard-input>
        </div>
        <div class="buttons">
          <outline-button label="Fermer" @click="${this.handleClose}">
          </outline-button>
          <standard-button
            ?isDisabled=${this.handleDisabled()} 
            type="submit"
            label="Envoyer"
            @click="${this.handleSubmit}"  
            aria-label="Envoyer le formulaire">
            <send-icon
              slot="icon-right" 
              size="small" 
              color=${
                this.handleDisabled()
                  ? "var(--colorGlobalAllDisabledStrong)"
                  : "var(--colorActionPrimaryContentInteracting)"
              }></send-icon>
          </standard-button>
        </div>
      </div>
    `;
  }
}
