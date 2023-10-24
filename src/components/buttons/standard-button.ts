import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  @property({ type: String }) color =
    "var(--colorActionPrimaryBackgroundDefault)";
  @property({ type: String }) hoverColor =
    "var(--colorActionPrimaryBackgroundInteracting)";
  @property({ type: String }) label? = "";
  @property({ type: Boolean }) isDisabled = false;

  static styles = css`
    button {
      display: flex;
      align-items: center;
      gap: 6px;
      background-color: var(--color);
      color: var(--colorActionPrimaryContentDefault);
      font-size: 14px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      border: 1px solid var(--color);
      letter-spacing: 0.02rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover,
    button:focus {
      background-color: var(--hover-color);
      border: 1px solid var(--hover-color);
    }

    button:disabled {
      color: var(--colorGlobalAllDisabledStrong);
      background-color: var(--colorGlobalAllDisabledSoft);
      border: 1px solid var(--colorGlobalAllDisabledSoft);
      cursor: not-allowed;
    }
  `;

  protected render() {
    return html`
      <style>
        :host {
          --color: ${this.color};
          --hover-color: ${this.hoverColor};
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
