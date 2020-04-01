import { LitElement, property } from "lit-element";
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
  // render() {
  //   const child = this.path
  //     ? html`
  //         <path></path>
  //       `
  //     : html`
  //         <use></use>
  //       `;

  //   const svg = html`
  //     <svg
  //       class="icon"
  //       aria-hidden="true"
  //       viewBox="0 0 ${this.view} ${this.view}"
  //     >
  //       ${child}
  //     </svg>
  //   `;
  //   return svg;
  // }
  // 自定义元素 首次被插入文档DOM时，调用
  connectedCallback() {
    super.connectedCallback();
    console.log("connected");
  }
  // 自定义元素 增加、删除、修改自身属性时，被调用。
  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    switch (name) {
      case "name":
        this.shadowRoot
          .querySelector("use")
          .setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            `../icons/icon.svg#icon-${newVal}`
          );
        break;
      case "path":
        if (newVal) {
          this.shadowRoot.innerHTML = `<svg class="icon" aria-hidden="true" viewBox="0 0 ${this.view} ${this.view}"><path></path></svg`;
          this.shadowRoot.querySelector("path").setAttribute("d", newVal);
        }
        break;
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
}
if (!customElements.get("wx-icon")) {
  customElements.define("wx-icon", WxIcon);
}
