import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("standard-input")
export class StandardInput extends LitElement {
  @property({ type: String }) label = "Label*";
  @property({ type: String }) placeholder = "Placeholder";

  static styles = css`
    .input-container {
      position: relative;
    }

    input {
      background-color: var(--colorNeutralBackgroundStrong);
      padding: 21px 8px 6px 8px;
      border: 1px solid var(--colorEditionBorderLight);
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

    label {
      position: absolute;
      top: 8px;
      left: 8px;
      color: #666;
      font-size: 14px;
      font-weight: 500;
      color: var(--colorEditionContentDefault);
    }
  `;

  protected render() {
    return html`
      <div class="input-container">
        <input id="input" placeholder="${this.placeholder}" />
        <label for="input">${this.label}</label>
      </div>
    `;
  }
}
