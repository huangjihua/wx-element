import { LitElement, property, html } from "lit-element";
const style = require("./scss/wx-switch.scss");

export class WxSwitch extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) isFocus = false;
  @property({ type: String }) color = "";

  static get styles() {
    return [style.default];
  }
  constructor() {
    super();
  }
  render() {
    return html`
      <input type="checkbox" class="switch" id="switch" /><label
        for="switch"
      ></label>
    `;
  }
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    console.log("attribute change: ", name, newVal);
    const checkBox = this.shadowRoot.querySelector("input");
    switch (name) {
      case "checked":
        if (checkBox) {
          if (newVal !== null && this.checked) {
            checkBox.checked = true;
          } else {
            checkBox.checked = false;
          }
        }
        // console.log("old:" + oldVal, "new:" + newVal);
        break;
      case "color":
        this.style.color = newVal;
        break;
      default:
        break;
    }
  }

  focus() {
    (this.shadowRoot.querySelector(".switch") as HTMLElement).focus();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    const checkBox = this.shadowRoot.querySelector("input");
    checkBox.addEventListener("change", () => {
      this.checked = checkBox.checked;
      this.dispatchEvent(
        new CustomEvent("change", {
          detail: {
            checked: this.checked
          }
        })
      );
    });

    checkBox.addEventListener("focus", e => {
      e.stopPropagation();
      if (!this.isFocus) {
        this.dispatchEvent(new CustomEvent("focus"));
      }
    });
    checkBox.addEventListener("blur", e => {
      e.stopPropagation();
      if (getComputedStyle(checkBox).zIndex === "2") {
        this.isFocus = true;
      } else {
        this.isFocus = false;
        this.dispatchEvent(
          new CustomEvent("blur", {
            detail: {
              value: checkBox.value
            }
          })
        );
      }
    });

    checkBox.addEventListener("keydown", e => {
      if (e.keyCode === 13) this.checked = !this.checked;
    });
  }
  updated() {
    console.log("updated");
    if (this.checked) {
      this.setAttribute("checked", "");
    } else {
      this.removeAttribute("checked");
    }
    if (this.disabled) {
      this.setAttribute("disabled", "");
      this.shadowRoot
        .querySelector("input")
        .setAttribute("disabled", "disabled");
    } else {
      this.removeAttribute("disabled");
      this.shadowRoot.querySelector("input").removeAttribute("disabled");
    }
  }
}

if (!customElements.get("wx-switch")) {
  customElements.define("wx-switch", WxSwitch);
}
