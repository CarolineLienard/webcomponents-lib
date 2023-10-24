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
  @property({ type: String }) icon = "sendIcon";
  @property({ type: Boolean }) isDisabled = false;

  // Component style
  static styles = css`
    button {
      display: flex;
      align-items: center;
      gap: 6px;
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
          --color: ${this.isDisabled ? "red" : this.color};
          --hover-color: ${this.isDisabled
            ? "var(--colorGlobalAllDisabledSoft)"
            : this.hoverColor};
          --font: ${this.isDisabled
            ? "var(--colorGlobalAllDisabledStrong)"
            : "var(--colorActionPrimaryContentDefault)"};
        }
      </style>
      <button ?disabled=${this.isDisabled}>
        <slot name="icon-left"></slot>
        ${this.label}
        <slot name="icon-right"></slot>
      </button>
    `;
  }
}
