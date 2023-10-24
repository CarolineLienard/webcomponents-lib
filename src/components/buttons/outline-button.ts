import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
@customElement("outline-button")
export class OutlineButton extends LitElement {
  // Component props

  @property({ type: String }) color =
    "var(--colorActionSecondaryBorderDefault)";
  @property({ type: String }) hoverColor =
    "var(--colorActionSecondaryBackgroundInteracting)";
  @property({ type: String }) label = "Button";

  @state()
  _disabled = false;

  // Component style
  static styles = css`
    button {
      background-color: transparent;
      color: var(--font);
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
    button:focus {
      border: 1px solid var(--colorEditionBorderInteracting);
      background-color: var(--hover-color);
      outline: none;
    }
  `;

  // Component render
  protected render() {
    return html`
      <style>
        :host {
          --outline: ${this._disabled ? "red" : this.color};
          --hover-color: ${this._disabled ? "lightGrey" : this.hoverColor};
          --font: ${this._disabled
            ? "var(--colorGlobalAllDisabledStrong)"
            : "var(--colorActionSecondaryContentDefault)"};
        }
      </style>
      <button>${this.label}</button>
    `;
  }
}
