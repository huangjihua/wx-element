import { LitElement, property, html } from "lit-element";
const style = require("./scss/wx-loading.scss");

export class WxLoading extends LitElement {
  @property({ type: Number }) size = 0;
  @property({ type: String }) color = "";

  static get styles() {
    return [style.default];
  }

  constructor() {
    super();
  }

  render() {
    let _color = this.color ? `color:${this.color};` : "";
    let _size = this.size > 0 ? `font-size:${this.size}px;` : "";
    return html`
      <svg
        class="loading"
        name="loading"
        viewBox="22 22 44 44"
        style="${_size}${_color}"
      >
        <circle
          class="circle"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke-width="3.6"
        ></circle>
      </svg>
      <slot></slot>
    `;
  }
}

if (!customElements.get("wx-loading")) {
  customElements.define("wx-loading", WxLoading);
}
