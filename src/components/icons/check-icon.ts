import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("check-icon")
export class CheckIcon extends LitElement {
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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5673 4.67649C20.0221 4.98981 20.1368 5.6125 19.8235 6.06731L12.0735 17.3173C11.8985 17.5714 11.6159 17.7305 11.3078 17.7483C10.9997 17.7662 10.7006 17.6407 10.4974 17.4085L5.24744 11.4085C4.88375 10.9929 4.92587 10.3611 5.34151 9.99742C5.75715 9.63374 6.38891 9.67586 6.75259 10.0915L11.1559 15.1239L18.1765 4.9327C18.4898 4.47788 19.1125 4.36318 19.5673 4.67649Z"
          fill=${this.color}
        />
      </svg>
    `;
  }
}
