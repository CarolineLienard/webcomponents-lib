import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../icons/check-icon";

@customElement("standard-input")
export class StandardInput extends LitElement {
  @property({ type: String }) label = "Label";
  @property({ type: String }) placeholder = "Placeholder";
  @property({ type: Boolean }) required = false;

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

    .input-icon {
      background-color: white;
      position: absolute;
      top: 15px;
      right: 8px;
    }
  `;

  protected render() {
    return html`
      <div class="input-container">
        <input id="input" placeholder="${this.placeholder}" />
        <label for="input">${this.label}${this.required ? "*" : ""}</label>
        <div class="input-icon">
          <check-icon slot="icon-right" size="small" color="red"></check-icon>
        </div>
      </div>
    `;
  }
}
