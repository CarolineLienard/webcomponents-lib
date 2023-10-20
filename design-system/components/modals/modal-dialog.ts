import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../../src/styles/index.css";
import "../buttons/icon-button";

@customElement("modal-dialog")
export class ModalDialog extends LitElement {
  static styles = css`
    .modal-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--colorGlobalOverlayMedium);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
    .modal {
      padding: 24px;
      background-color: white;
      border-radius: 16px;
      width: 50%;
    }
    .close-button {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  `;

  @property({ type: String }) title = "Headline";
  @property({ type: String }) subtitle = "Your text here";

  render() {
    return html`
      <div class="modal-container">
        <div class="modal">
          <div class="modal-title">
            <div class="close-button">
              <h1>${this.title}</h1>
              <icon-button></icon-button>
            </div>
            <p>${this.subtitle}</p>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
