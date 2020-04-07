import { LitElement, property, html } from "lit-element";
const style = require("./scss/wx-icon.scss");

export class WxIcon extends LitElement {
  @property({ type: Number }) size = 0;
  @property({ type: String }) name = "";
  @property({ type: String }) color = "";
  @property({ type: String }) path = "";
  @property({ type: Number }) view = 1024;

  static get styles() {
    return [style.default];
  }
  constructor() {
    super();
    // 构建无法获取属性值
    this.shadowRoot.innerHTML = `
      <svg class="icon" aria-hidden="true" viewBox="0 0 ${this.view} ${
      this.view
    }">
          ${this.path ? " <path></path>" : "<use></use>"}
      </svg>
      `;
  }

  // SVG 采用render渲染connectedCallback阶段无法获取到use/path
  render() {
    return html`
      <svg
        class="icon"
        aria-hidden="true"
        viewBox="0 0 ${this.view} ${this.view}"
      ></svg>
    `;
  }
  // 自定义元素 首次被插入文档DOM时，调用
  connectedCallback() {
    super.connectedCallback();
  }
  // 自定义元素 增加、删除、修改自身属性时，被调用。
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    // console.log("attribute change: ", name, newVal);
    switch (name) {
      case "color":
        this.style.color = newVal;
        break;
      case "size":
        this.style.fontSize = newVal + "px";
        break;
      default:
        break;
    }
  }

  updated() {
    console.log("updated");
    const iconSvg = this.shadowRoot.querySelector(".icon") as HTMLElement;
    if (this.name) {
      iconSvg.innerHTML = `<use xlink:href="../icons/icon.svg#icon-${this.name}"></use>`;
    } else if (this.path) {
      iconSvg.innerHTML = `<path d="${this.path}"> </path>`;
    }
  }
}
if (!customElements.get("wx-icon")) {
  customElements.define("wx-icon", WxIcon);
}
