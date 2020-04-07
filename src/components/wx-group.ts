import { LitElement, html, property } from "lit-element";
const style = require("./scss/wx-group.scss");

export class WxGroup extends LitElement {
  @property({ type: Boolean }) disabled = false;

  static get styles() {
    return [style.default];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
if (!customElements.get("wx-group")) {
  customElements.define("wx-group", WxGroup);
}
