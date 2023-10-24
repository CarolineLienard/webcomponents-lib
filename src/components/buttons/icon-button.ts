import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("icon-button")
export class IconButton extends LitElement {

  static styles = css`
    button {
      background-color: var(--colorActionTertiaryBackgroundDefault);
      font-size: 14px;
      font-weight: 600;
      padding: 10px;
      border-radius: 8px;
      border: none;
      letter-spacing: 0.02rem;
      cursor: pointer;
    }
    button:hover,
    button:focus {
      background-color: var(--colorActionTertiaryBackgroundInteracting);
      outline: none;
    }
  `;

  protected render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}
