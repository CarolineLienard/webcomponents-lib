import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { colors } from "../../styles/colors.js";

@customElement("outline-button")
export class OutlineButton extends LitElement {
  // Component props

  @property({ type: String }) outline = colors.colorActionPrimaryBackgroundDefault;

  @property({ type: String }) hoverColor =
    colors.colorActionPrimaryBackgroundInteracting;

  @property({ type: String }) label = "Button";

  @state()
  _disabled = true;

  // Component style
  static styles = css`
    button {
      background-color: transparent;
      color: red;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid var(--outline);
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
          --outline: ${this._disabled ? "red" : this.outline};
          --hover-color: ${this._disabled ? "lightGrey" : this.hoverColor};
        }
      </style>
      <button>${this.label}</button>
    `;
  }
}
