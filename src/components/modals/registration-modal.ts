import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./modal-dialog";
import "../form/UserForm";
import "../buttons/standard-button";

@customElement("registration-modal")
export class RegistrationModal extends LitElement {
  @state() isOpen: boolean = true;
  @state() isSubmit: boolean = false;
  @state() userInfo: string = "";

  private toggleModal() {
    this.isOpen = !this.isOpen;
  }

  private handleFormSubmitted(e: CustomEvent) {
    this.isSubmit = e.detail.isSubmitted;
    this.userInfo = e.detail.name;
  }

  private handleClose() {
    this.isSubmit = false;
    const userForm = this.shadowRoot?.querySelector("user-form");
    const form = userForm?.shadowRoot?.querySelector("form");

    if (form) {
      form.dispatchEvent(new CustomEvent("reset-form"));
    }
  }

  protected render() {
    return html`
      <standard-button
        @click="${this.toggleModal}"
        ?hidden=${!this.isOpen}
        label="Inscription"
        role="button"
        aria-haspopup="Ouvre le formulaire d'inscription"
      >
      </standard-button>
      <modal-dialog
        headline="Inscription"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend magna eu libero mattis dictum. Donec maximus suscipit ante, id eleifend nisi vulputate sed."
        ?hidden=${this.isOpen}
        @handleClose="${this.toggleModal}"
        aria-label="Formulaire d'inscription"
        aria-hidden="${!this.isOpen ? "true" : "false"}"
      >
        <user-form
          @form-submitted="${this.handleFormSubmitted}"
          @handleClose="${this.toggleModal}"
        ></user-form>
      </modal-dialog>
      <modal-dialog
        ?hidden=${!this.isSubmit}
        @handleClose=${this.handleClose}
        headline="Merci ${this.userInfo}"
        subtitle="Vous allez bientôt recevoir un email de confirmation pour valider votre inscription."
        aria-label="Message de confirmation"
        aria-hidden="${!this.isSubmit ? "true" : "false"}"
      >
        <outline-button
          @click=${this.handleClose}
          label="Fermer"
          role="button"
          aria-haspopup="Ferme la fenêtre de confirmation"
        ></outline-button>
      </modal-dialog>
    `;
  }
}
