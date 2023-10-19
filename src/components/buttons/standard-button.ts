import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    button {
      background-color: #007acc;
      color: white;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  `;

  // Declare reactive properties
  @property()
  label?: string = "Button";

  // Render the UI as a function of component state
  render() {
    return html`<button>${this.label}</button>`;
  }
}
