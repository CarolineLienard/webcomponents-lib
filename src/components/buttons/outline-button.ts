import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
@customElement("outline-button")
export class OutlineButton extends LitElement {
  @property({ type: String }) label? = "";
  @property({ type: Boolean }) isDisabled = false;

  static styles = css`
    button {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      background-color: var(--colorActionSecondaryBackgroundDefault);
      color: var(--colorActionSecondaryContentDefault);
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      border: 1px solid var(--colorActionSecondaryBorderDefault);
      letter-spacing: 0.02rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    button:hover,
    button:focus {
      color: var(--colorActionSecondaryContentInteracting);
      background-color: var(--colorActionSecondaryBackgroundInteracting);
      border: 1px solid var(--colorActionSecondaryBorderInteracting);
      outline: none;
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
      <button ?disabled=${this.isDisabled}>
        <slot name="icon-left"></slot>
        ${this.label}
        <slot name="icon-right"></slot>
      </button>
    `;
  }
}
