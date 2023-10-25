import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../buttons/icon-button";
import "../icons/cross-icon";
import "../tooltip/tooltip";

@customElement("modal-dialog")
export class ModalDialog extends LitElement {
  @property({ type: String }) headline = "Headline";
  @property({ type: String }) subtitle = "Your text here";

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
      padding: 1.875rem;
      background-color: var(--colorNeutralBackgroundStrong);
      border-radius: 16px;
      width: 27.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .modal-title {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .close-button {
      position: absolute;
      left: 95%;
      bottom: 80%;
    }

    h1 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--colorNeutralContentStrong);
      margin: 0;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--colorNeutralContentMedium);
      margin: 0;
      line-height: 1.5rem;
    }
  `;

  _handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  render() {
    return html`
      <div class="modal-container">
        <div class="modal">
          <div class="modal-title">
            <tooltip-component class="close-button" text="Fermer">
              <icon-button @click="${this._handleClose}">
                <cross-icon size="small"></cross-icon>
              </icon-button>
            </tooltip-component>
            <h1>${this.headline}</h1>
            <p>${this.subtitle}</p>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
