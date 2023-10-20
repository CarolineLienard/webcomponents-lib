import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("icon-button")
export class IconButton extends LitElement {
  // Component style
  static styles = css`
    button {
      background-color: var(--background-color);
      color: white;
      font-size: 14px;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      border: var(--border);
      letter-spacing: 0.02rem;
      cursor: pointer;
      transition: background-color 0.2s;
      color: red;
    }
    button:hover {
      background-color: var(--hover-color);
    }
  `;

  // Component render
  protected render() {
    return html`
      <style>
        :host {
        }
      </style>
      <button>X</button>
    `;
  }
}
