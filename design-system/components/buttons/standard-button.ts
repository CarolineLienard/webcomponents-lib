import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { colors } from "../../styles/colors.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  
  // Component props
  @property({ type: String }) backgroundColor =
    colors.colorActionPrimaryBackgroundDefault;
  @property({ type: String }) hoverColor =
    colors.colorActionPrimaryBackgroundInteracting;
  @property({ type: String }) label = "Button";
  @property({ type: Boolean }) border = false;
  @property({ type: Boolean }) disabled = false;

  // Component style
  static styles = css`
    button {
      background-color: var(--background-color);
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      border: var(--border);
      letter-spacing: 0.02rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button:hover {
      background-color: var(--hover-color);
    }
  `;

  // Component render
  protected render() {
    return html`
      <style>
        :host {
          --background-color: ${this.backgroundColor};
          --hover-color: ${this.disabled
            ? colors.colorGlobalAllDisabledSoft
            : this.hoverColor};
          --border: ${this.border
            ? `1px solid ${this.backgroundColor}`
            : "none"};
        }
      </style>
      <button>${this.label}</button>
    `;
  }
}
