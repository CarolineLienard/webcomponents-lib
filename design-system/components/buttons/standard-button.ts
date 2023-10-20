import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  // Component props
  @property({ type: String }) color =
    "var(--colorActionPrimaryBackgroundDefault)";
  @property({ type: String }) hoverColor =
    "var(--colorActionPrimaryBackgroundInteracting)";
  @property({ type: String }) label = "Button";

  @state()
  _disabled = false;

  // Component style
  static styles = css`
    button {
      background-color: var(--color);
      color: var(--font);
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
          --color: ${this._disabled
            ? "var(--colorGlobalAllDisabledSoft)"
            : this.color};
          --hover-color: ${this._disabled
            ? "var(--colorGlobalAllDisabledSoft)"
            : this.hoverColor};
          --font: ${this._disabled
            ? "var(--colorGlobalAllDisabledStrong)"
            : "var(--colorActionPrimaryContentDefault)"};
        }
      </style>
      <button>${this.label}</button>
    `;
  }
}
