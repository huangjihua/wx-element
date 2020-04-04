import { LitElement, html, property } from "lit-element";
const style = require("./scss/wx-message.scss");

export class WxMessage extends LitElement {
  @property({ type: String }) type = "";
  @property({ type: String }) icon = "";
  @property({ type: Boolean }) show = true;
  @property({ type: String }) color = ""; // icon color

  static get styles() {
    return [style.default];
  }
  constructor() {
    super();
  }

  render() {
    let wxIcon = this.icon
      ? html`
          <wx-icon
            class="message-type"
            size="16"
            name="${this.icon}"
            color="${this.color}"
          ></wx-icon>
        `
      : "";
    let loading =
      this.type === "loading"
        ? html`
            <wx-loading></wx-loading>
          `
        : "";
    return html`
      <div class="message">
        ${wxIcon} ${loading}
        <slot></slot>
      </div>
    `;
  }

  sceneType(type) {
    //优先采用自定义icon类型
    if (this.icon) {
      this.icon = this.icon;
      this.color = `var(--themeColor,${this.color})`;
      return false;
    }
    switch (type) {
      case "info":
        this.icon = "info-circle-fill";
        this.color = "var(--infoColor,#1890ff)";
        break;
      case "success":
        this.icon = "check-circle-fill";
        this.color = "var(--successColor,#52c41a)";

        break;
      case "error":
        this.icon = "close-circle-fill";
        this.color = "var(--errorColor,#f4615c)";

        break;
      case "warning":
        this.icon = "warning-circle-fill";
        this.color = "var(--warningColor,#faad14)";
      case "loading":
        if (this.color)
          this.shadowRoot
            .querySelector("wx-loading")
            .setAttribute("color", this.color);
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (!this.show) {
      this.removeEventListener("close", null);
    }
  }
  // LitElement生命周期回调。firstUpdated在第一次更新和渲染组件后触发
  firstUpdated() {
    if (this.show) {
      this.setAttribute("show", "");
      this.dispatchEvent(
        new CustomEvent("close", { detail: { target: this } }) // 派发自定义事件
      );
    }
    if (this.type) this.setAttribute("type", this.type);
    if (this.icon) this.setAttribute("icon", this.icon);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    if (oldVal !== newVal) {
      switch (name) {
        case "type":
          this.sceneType(newVal);
          break;
        case "icon":
          this.icon = newVal;
          break;
        case "color":
          if (newVal) this.color = newVal;
          break;
        default:
          break;
      }
    }
  }

  // shouldUpdate以指定哪些属性更改应引起更新。默认情况下，此方法始终返回true。
  shouldUpdate(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log(
        `${propName} changed. oldValue: ${oldValue} currentValue:${this.show}`
      );
    });
    // 关闭
    if (!this.show) {
      this.removeAttribute("show");
      this.remove(); // 移除整个元素
    }
    return changedProperties;
  }
  // async performUpdate() {
  //   console.log("正在请求动画帧...");
  //   await new Promise(resolve => requestAnimationFrame(() => resolve()));
  //   console.log("得到了动画帧。 执行更新");
  //   super.performUpdate();
  // }
}

if (!customElements.get("wx-message")) {
  customElements.define("wx-message", WxMessage);
}
// 消息定位容器
let messageContainer = document.getElementById("message-container");
if (!messageContainer) {
  messageContainer = document.createElement("div");
  messageContainer.id = "message-container";
  messageContainer.style.position = "fixed";
  messageContainer.style.pointerEvents = "none";
  messageContainer.style.left = "0";
  messageContainer.style.right = "0";
  messageContainer.style.top = "10px";
  messageContainer.style.zIndex = "11";
  document.body.appendChild(messageContainer);
}

export default {
  /**
   * 消息类
   *
   * @param {Object} options { type,text,duration:3000,closeFn,icon}
   * @returns WxMessage
   */
  show(options: Object) {
    const defaultVal = {
      type: "", // success | error | warning | loading |info
      text: "",
      duration: 0,
      closeFn: null,
      icon: "",
      color: ""
    };
    let { type, text, duration, closeFn, icon, color } = Object.assign(
      defaultVal,
      options
    );
    if (
      !duration &&
      (type === "info" ||
        type === "error" ||
        type === "success" ||
        type === "warning")
    ) {
      duration = 3000;
    }
    const message = new WxMessage();
    let timer;
    clearTimeout(timer);
    messageContainer.appendChild(message);
    if (type) message.type = type;
    if (icon) message.icon = icon;
    if (color) message.color = color;
    message.textContent = text;
    message.show = true;
    if (duration) {
      // 自动消失
      timer = setTimeout(() => {
        if (closeFn instanceof Function) closeFn();
        message.show = false;
      }, duration);
    }
    return message;
  }
};
