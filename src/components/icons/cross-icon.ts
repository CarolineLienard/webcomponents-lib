import { LitElement, html, CSSResultArray } from "lit";
import { customElement, property } from "lit/decorators.js";
import { iconStyle } from "./icon-style";

@customElement("cross-icon")
export class CrossIcon extends LitElement {
  @property({ type: String }) size = "medium";
  @property({ type: String }) color =
    "var(--colorActionTertiaryContentDefault)";

  static styles: CSSResultArray = [iconStyle];

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
          d="M7.45711 6.04289C7.06658 5.65237 6.43342 5.65237 6.04289 6.04289C5.65237 6.43342 5.65237 7.06658 6.04289 7.45711L10.5858 12L6.04289 16.5429C5.65237 16.9334 5.65237 17.5666 6.04289 17.9571C6.43342 18.3476 7.06658 18.3476 7.45711 17.9571L12 13.4142L16.5429 17.9571C16.9334 18.3476 17.5666 18.3476 17.9571 17.9571C18.3476 17.5666 18.3476 16.9334 17.9571 16.5429L13.4142 12L17.9571 7.45711C18.3476 7.06658 18.3476 6.43342 17.9571 6.04289C17.5666 5.65237 16.9334 5.65237 16.5429 6.04289L12 10.5858L7.45711 6.04289Z"
          fill=${this.color}
        />
      </svg>
    `;
  }
}
