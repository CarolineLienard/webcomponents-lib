import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("tooltip-component")
export class TooltipComponent extends LitElement {
  @property({ type: String }) text = "";
  @state() showTooltip = false;

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip {
      position: absolute;
      left: -0.5rem;
      bottom: -2rem;
      z-index: 1;
      background-color: var(--colorNeutralBackgroundMedium);
      color: var(--colorNeutralContentMedium);
      border: 1px solid var(--colorNeutralBorderMedium);
      font-size: 14px;
      font-weight: 500;
      border-radius: 4px;
      padding: 6px 8px;
      white-space: nowrap;
    }
  `;

  toggleTooltip = () => {
    this.showTooltip = !this.showTooltip;
  };

  render() {
    return html`
      <slot
        @mouseover=${this.toggleTooltip}
        @mouseout=${this.toggleTooltip}
      ></slot>
      <div class="tooltip" ?hidden=${!this.showTooltip}>${this.text}</div>
    `;
  }
}
