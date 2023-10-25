// Pour comparer, j'ai reproduit le composant modal-dialog fait avec lit en vanillaJS
class ModalDialog extends HTMLElement {
  constructor() { // On initie l'objet
    super(); // On call la classe parente (superclasse)
    this.attachShadow({ mode: "open" }); // On crée un "shadow DOM" pour le composant
    this.headline = "Headline"; // On déclare les "props"
    this.subtitle = "Your text here";
    this.render(); // On render le composant

    // On ajoute un observateur pour surveiller les changements d'attributs, ici "headline" et "subtitle"
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "headline") {
            this.headline = this.getAttribute("headline") || "Headline";
          } else if (mutation.attributeName === "subtitle") {
            this.subtitle = this.getAttribute("subtitle") || "Your text here";
          }
        }
      }
      this.render(); // on re-render le composant en fonction des changements
    });

    observer.observe(this, { attributes: true });
  }

  // Méthode appelée lorsque le composant est connecté au DOM
  connectedCallback() {
    this.render();
  }

  // Gère l'événement de fermeture du composant
  _handleClose() {
    this.dispatchEvent(new CustomEvent("handleClose"));
  }

  // Liste des attributs à surveiller
  static get observedAttributes() {
    return ["headline", "subtitle"];
  }

  // Plutôt qu'utiliser l'api observer, on peut aussi créer une fonction comme celle-ci :
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "headline") {
      this.headline = newValue || "Headline";
    } else if (name === "subtitle") {
      this.subtitle = newValue || "Your text here";
    }
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Styles du composant */
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
      </style>
      <div class="modal-container">
        <div class="modal">
          <div class="modal-title">
            <div class="close-button" title="Close">
              <button id="closeButton">
                <span class="cross-icon" data-size="small"></span>
              </button>
            </div>
            <h1>${this.headline}</h1>
            <p>${this.subtitle}</p>
          </div>
          <slot></slot>
        </div>
      </div>
    `;

    // Gère l'événement de fermeture
    this.shadowRoot
      .querySelector("#closeButton")
      .addEventListener("click", () => this._handleClose());
  }
}

// Enregistre le composant ModalDialog en tant qu'élément personnalisé "modal-dialog"
customElements.define("modal-dialog", ModalDialog);