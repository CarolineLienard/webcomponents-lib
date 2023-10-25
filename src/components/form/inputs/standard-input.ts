import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../../icons/check-icon";
import "../../icons/error-icon";

@customElement("standard-input")
export class StandardInput extends LitElement {
  @property({ type: String }) name = "";
  @property({ type: String }) value = "";
  @property({ type: String }) label = "Label";
  @property({ type: String }) placeholder = "Placeholder";
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) error = false;
  @property({ type: String }) errorMessage = "";

  static styles = css`
    :host {
      --input-background-color: var(--colorNeutralBackgroundStrong);
      --input-border: var(--border);
      --input-color: var(--colorNeutralContentStrong);
      --input-placeholder-color: var(--colorNeutralContentMedium);
      --input-focus-border: var(--interactingBorder);
      --label-color: var(--label);
      --error-color: var(--colorStatusContentError);
    }

    .input-container {
      position: relative;
    }

    input {
      background-color: var(--input-background-color);
      padding: 21.5px 35px 6px 8px;
      border: 1px solid var(--input-border);
      border-radius: 8px;
      font-size: 16px;
      font-weight: 400;
      color: var(--input-color);
      width: 100%;
      box-sizing: border-box;
    }

    input::placeholder {
      color: var(--input-placeholder-color);
    }

    input:focus,
    input:hover {
      border: 1px solid var(--input-focus-border);
      outline: none;
    }

    label {
      position: absolute;
      top: 7px;
      left: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--label-color);
    }

    input:focus + label,
    input:hover + label {
      color: var(--input-focus-border);
    }

    span {
      display: block;
      font-size: 14px;
      color: var(--error-color);
      font-weight: 400;
      font-style: italic;
      margin: 0.4rem 0.2rem;
    }

    .input-icon {
      background-color: white;
      position: absolute;
      top: 14px;
      right: 8px;
    }
  `;

  inputHandler(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const { name, value } = event.target;
      this.dispatchEvent(
        new CustomEvent("val-change", { detail: { name, value } })
      );
    }
  }

  checkTemplate() {
    if (this.value.length > 0) {
      const icon = this.error
        ? html`
            <error-icon
              slot="icon-right"
              size="small"
              color="var(--colorStatusBackgroundErrorAccent)"
            ></error-icon>
          `
        : html`
            <check-icon
              slot="icon-right"
              size="small"
              color="var(--colorStatusContentSuccess)"
            ></check-icon>
          `;

      return html`
        <div class="input-icon">${icon}</div>
        ${this.error && this.value.length > 0
          ? html`<span role="alert">${this.errorMessage}</span>`
          : null}
      `;
    }
    return null;
  }

  protected render() {
    const borderColor =
      this.error && this.value.length > 0
        ? "var(--colorStatusContentError)"
        : "var(--colorEditionBorderDefault)";
    const labelColor =
      this.error && this.value.length > 0
        ? "var(--colorStatusContentError)"
        : "var(--colorEditionContentDefault)";
    const interactingBorderColor =
      this.error && this.value.length > 0
        ? "var(--colorStatusContentError)"
        : "var(--colorEditionBorderInteracting)";

    return html`
      <style>
        :host {
          --border: ${borderColor};
          --label: ${labelColor};
          --interactingBorder: ${interactingBorderColor};
        }
      </style>
      <div class="input-container">
        <input
          .name=${this.name}
          @input=${this.inputHandler}
          placeholder="${this.placeholder}"
          .value=${this.value}
        />
        <label for="input">${this.label}${this.required ? "*" : ""}</label>
        ${this.checkTemplate()}
      </div>
    `;
  }
}
