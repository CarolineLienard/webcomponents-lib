import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

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
    .modal-title {
    }
    .close-button {
      display: flex;
      justify-content: space-between;
      align-items: flex-start; /* Ajoutez cette ligne */
    }
  `;

  closeModal() {
    const modal = document.getElementById("my-modal");
    if (modal) {
      modal.style.visibility = "hidden";
    }
  }

  render() {
    return html`
      <div class="modal-container">
        <div class="modal">
          <div class="modal-title">
            <div class="close-button">
              <h1>Headline</h1>
              <standard-button
                @click=${this.closeModal}
                label="X"
              ></standard-button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eleifend magna eu libero mattis dictum. Donec maximus suscipit
              ante, id eleifend nisi vulputate sed.
            </p>
          </div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
