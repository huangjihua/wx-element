import { LitElement, html, property } from "lit-element";

const btn_style = require("./scss/at-button.scss");

// @customElement("at-button")
export class AtButton extends LitElement {
  // 按钮风格：primary,dashed,flat,danger和default
  @property({ type: String }) type = "default";
  // 转换成a标签
  @property({ type: String }) href = "";
  @property({ type: String }) target = null || "_blank";
  @property({ type: String }) rel = "";
  // 下载按钮
  @property({ type: String }) download = false;
  // 带loading
  @property({ type: Boolean }) loading = false;
  // 左边带图标，left,heart,search,link
  @property({ type: String }) icon = "";
  // 形状 circle
  @property({ type: String }) shape = "circle";
  //适合其父元素宽度
  @property({ type: Boolean }) block = false;
  //是否禁用
  @property({ type: Boolean }) disabled = false;
  // 增加自定义属性
  // static get properties() {
  //   return { test: { type: String } };
  // }

  static get styles() {
    return [btn_style.default];
  }
  constructor() {
    super();
  }
  render() {
    let result;
    if (this.href) {
      result = html`
        <a
          href="${this.href}"
          target="${this.target}"
          rel="${this.rel}"
          class="btn"
          name="btn"
          download="${this.download}"
        ></a>
      `;
    } else {
      result = html`
        <button class="btn" name="btn" disabled="${this.disabled}"></button>
      `;
    }
    result = html`
      ${result}
      ${!this.loading && this.icon && this.icon != "null"
        ? '<xy-icon  name="' + this.icon + '"></xy-icon>'
        : ""}
      <slot></slot>
    `;
    return result;
  }
}
// 注意这里需要判断下，不然浏览器会报：Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
// 所以不能用@customElement("at-button")写法 ，目前还没找到解决方案
if (!customElements.get("at-button")) {
  customElements.define("at-button", AtButton);
}
