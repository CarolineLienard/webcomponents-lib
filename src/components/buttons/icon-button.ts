import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("icon-button")
export class IconButton extends LitElement {
  @property({ type: Boolean }) isDisabled = false;
  @property({ type: String }) variant = "primary";
  @property()
  classes = {
    primary: this.variant === "primary",
    secondary: this.variant === "secondary",
    tertiary: this.variant === "tertiary",
  };

  static styles = css`
    button {
      background-color: var(--colorActionTertiaryBackgroundDefault);
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.625rem;
      border-radius: 8px;
      border: none;
      letter-spacing: 0.02rem;
      cursor: pointer;
    }

    button:hover,
    button:focus {
      outline: none;
    }

    button:disabled {
      color: var(--colorGlobalAllDisabledStrong);
      background-color: var(--colorGlobalAllDisabledSoft);
      border: 1px solid var(--colorGlobalAllDisabledSoft);
      cursor: not-allowed;
    }

    button:disabled:hover,
    button:disabled:focus {
      color: var(--colorGlobalAllDisabledStrong);
      background-color: var(--colorGlobalAllDisabledSoft);
      border: 1px solid var(--colorGlobalAllDisabledSoft);
      cursor: not-allowed;
    }

    .primary {
      background-color: var(--colorActionTertiaryBackgroundDefault);
      border: 1px solid var(--colorActionTertiaryBackgroundDefault);
      border: none;
    }

    .primary:hover,
    .primary:focus {
      background-color: var(--colorActionTertiaryBackgroundInteracting);
    }

    .secondary {
      // autres variations du icon button
    }

    .tertiary {
      // autres variations du icon button
    }
  `;

  protected render() {
    return html`
      <button ?disabled=${this.isDisabled} class=${classMap(this.classes)}>
        <slot></slot>
      </button>
    `;
  }
}
