import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../icons/check-icon";
import "../../icons/error-icon";

@customElement("standard-input")
export class StandardInput extends LitElement {
  @property({ type: String }) name = "";
  @property({ type: String }) value = "";
  @property({ type: String }) label = "Label";
  @property({ type: String }) placeholder = "Placeholder";
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) error = false;
  @property({ type: String }) errorMessage = "";

  static styles = css`
    .input-container {
      position: relative;
    }

    input {
      background-color: var(--colorNeutralBackgroundStrong);
      padding: 21.5px 35px 6px 8px;
      border: 1px solid var(--colorEditionBorderDefault);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 400;
      color: var(--colorNeutralContentStrong);
      width: 100%;
      box-sizing: border-box;
    }

    input::placeholder {
      color: var(--colorNeutralContentMedium);
    }

    input:focus {
      outline: 2px solid var(--colorGlobalBorderFocus);
    }

    label {
      position: absolute;
      top: 7px;
      left: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--colorEditionContentDefault);
    }

    span {
      font-size: 14px;
      color: red;
      font-weight: 400;
      font-style: italic;
      padding-top: 2rem;
    }

    .input-icon {
      background-color: white;
      position: absolute;
      top: 15px;
      right: 8px;
    }
  `;

  inputHandler(event: any) {
    this.dispatchEvent(
      new CustomEvent("val-change", {
        detail: { value: event.composedPath()[0].value, name: this.name },
      })
    );
  }

  checkTemplate() {
    if (this.error && this.value.length > 0) {
      return html`
        <div class="input-icon">
          <error-icon slot="icon-right" size="small" color="red"></error-icon>
        </div>
        <span>${this.errorMessage}</span>
      `;
    } else if (!this.error && this.value.length > 0) {
      return html`
        <div class="input-icon">
          <check-icon slot="icon-right" size="small" color="green"></check-icon>
        </div>
      `;
    } else {
      return null;
    }
  }

  protected render() {
    return html`
      <div class="input-container">
        <input
          .name=${this.name}
          @input=${this.inputHandler}
          placeholder="${this.placeholder}"
          .value=${this.value}
        />
        <label for="input">${this.label}${this.required ? "*" : ""}</label>
        ${this.checkTemplate()}
      </div>
    `;
  }
}
