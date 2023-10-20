import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../buttons/icon-button";
import "../icons/cross-icon";

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
      visibility: var(--open);
    }
    .modal {
      padding: 30px;
      background-color: white;
      border-radius: 16px;
      width: 440px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .modal-title {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .close-button {
      position: absolute;
      left: 94%;
      bottom: 75%;
    }
    h1 {
      font-size: 18px;
      font-weight: 600;
      color: var(--colorNeutralContentStrong);
      margin: 0;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: var(--colorNeutralContentMedium);
      margin: 0;
      line-height: 24px;
    }
  `;

  @property({ type: String }) title = "Headline";
  @property({ type: String }) subtitle = "Your text here";
  @property({ type: Boolean }) isOpen: boolean = false;

  _handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  render() {
    return html`
      <style>
        :host {
          --open: ${this.isOpen ? "visible" : "hidden"};
        }
      </style>
      <div class="modal-container">
        <div class="modal">
          <div class="modal-title">
            <div class="close-button">
              <icon-button @click="${this._handleClose}">
                <cross-icon size="small"></cross-icon>
              </icon-button>
            </div>
            <h1>${this.title}</h1>
            <p>${this.subtitle}</p>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
