import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("error-icon")
export class ErrorIcon extends LitElement {
  @property({ type: String }) size = "medium";
  @property({ type: String }) color =
    "var(  --colorActionTertiaryContentDefault)";

  static styles = css`
    :host {
      display: inline-block;
    }

    svg {
      fill: currentColor;
    }

    .small {
      width: 20px;
      height: 20px;
    }

    .medium {
      width: 32px;
      height: 32px;
    }

    .xlarge {
      width: 48px;
      height: 48px;
    }
  `;

  render() {
    return html`
      <svg
        class=${this.size}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="11" fill="${this.color}" />
        <path
          d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V5Z"
          fill="white"
        />
        <path
          d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
          fill="white"
        />
      </svg>
    `;
  }
}
