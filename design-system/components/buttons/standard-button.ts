import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { colors } from "../../styles/colors.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  // Component props
  @property({ type: String }) color =
    colors.colorActionPrimaryBackgroundDefault;
  @property({ type: String }) hoverColor =
    colors.colorActionPrimaryBackgroundInteracting;
  @property({ type: String }) label = "Button";

  @state()
  _disabled = true;

  // Component style
  static styles = css`
    button {
      background-color: var(--color);
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid var(--color);
      letter-spacing: 0.02rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button:hover {
      background-color: var(--hover-color);
      border: 1px solid var(--hover-color);
    }
  `;

  // Component render
  protected render() {
    return html`
      <style>
        :host {
          --color: ${this._disabled ? "red" : this.color};
          --hover-color: ${this._disabled ? "blue" : this.hoverColor};
        }
      </style>
      <button>${this.label}</button>
    `;
  }
}
