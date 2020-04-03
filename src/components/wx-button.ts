import { LitElement, html, property } from "lit-element";
import "./wx-loading";
import "./wx-icon";

const btn_style = require("./scss/wx-button.scss");

// @customElement("wx-button")
export class WxButton extends LitElement {
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
  // 状态切换
  @property({ type: Boolean }) toggle = this.hasAttribute("toggle");

  @property({ type: Boolean }) checked = false;

  static get styles() {
    return [btn_style.default];
  }

  constructor() {
    super();
  }

  render() {
    let result;
    let _loading = this.loading
      ? html`
          <wx-loading></wx-loading>
        `
      : "";
    let button = this.disabled
      ? html`
          <button
            class="btn"
            id="btn"
            name="btn"
            disabled="${this.disabled}"
          ></button>
        `
      : html`
          <button class="btn" id="btn" name="btn"></button>
        `;
    if (this.href) {
      result = html`
        <a
          id="btn"
          class="btn"
          name="btn"
          href="${this.href}"
          target="${this.target}"
          rel="${this.rel}"
          download="${this.download}"
        ></a>
      `;
    } else {
      result = html`
        ${_loading} ${button}
      `;
    }
    result = html`
      ${result}
      ${!this.loading && this.icon && this.icon != "null"
        ? html`
            <wx-icon name="${this.icon}"></wx-icon>
          `
        : ""}
      <slot></slot>
    `;
    return result;
  }

  focus() {
    const btn = this.shadowRoot.querySelector(".btn") as HTMLElement;
    btn.focus();
  }

  firstUpdated() {
    this.addEventListener("click", () => {
      if (this.toggle) {
        this.checked = !this.checked;
        if (this.checked) {
          this.setAttribute("checked", "");
        } else {
          this.removeAttribute("checked");
        }
      }
    });
    this.addEventListener("keydown", e => {
      if (e.keyCode === 13) e.stopPropagation();
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.onmousedown = e => {
      const { left, top } = this.getBoundingClientRect();
      if (!this.disabled) {
        //按钮点击动态波纹效果位置
        this.style.setProperty("--x", `${e.clientX - left}px`);
        this.style.setProperty("--y", `${e.clientY - top}px`);
      }
    };
  }
  // attributeChangedCallback(name, oldValue, newValue) {
  // if(oldValue!==newValue){

  // }
  // }
}
// 注意这里需要判断下，不然浏览器会报：Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
// 所以不能用@customElement("wx-button")写法 ，目前还没找到解决方案
if (!customElements.get("wx-button")) {
  customElements.define("wx-button", WxButton);
}
