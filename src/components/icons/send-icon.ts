import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("send-icon")
export class SendIcon extends LitElement {
  @property({ type: String }) size = "medium";
  @property({ type: String }) color =
    "var(  --colorActionTertiaryContentDefault)";

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      fill: currentColor;
    }

    .small {
      width: 16px;
      height: 16px;
    }

    .large {
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
        <path
          d="M9.21988 4.45148L21.7918 10.3713C23.1096 10.9918 23.7684 11.302 23.8774 11.7755C23.9113 11.9231 23.9113 12.0764 23.8774 12.224C23.7684 12.6975 23.1096 13.0077 21.7918 13.6282L9.21988 19.548C5.68257 21.2136 3.91391 22.0465 2.98921 21.4694C2.70552 21.2924 2.47075 21.0471 2.30636 20.7559C1.77054 19.8067 2.68031 18.0764 4.49983 14.6157L5.34945 12.9997H16.5002C17.0525 12.9997 17.5002 12.552 17.5002 11.9997C17.5002 11.4475 17.0525 10.9997 16.5002 10.9997H5.34945L4.49983 9.3838C2.68031 5.92314 1.77054 4.1928 2.30636 3.24363C2.47075 2.95243 2.70552 2.7071 2.98921 2.53007C3.91391 1.95304 5.68257 2.78585 9.21988 4.45148Z"
          fill=${this.color}
        />
      </svg>
    `;
  }
}
