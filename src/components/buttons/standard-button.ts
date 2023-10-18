import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("standard-button")
export class StandardButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: red;
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
