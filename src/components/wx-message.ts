import {
  LitElement,
  html,
  property,
  CSSResult
  // css
} from "lit-element";

export class AtMessage extends LitElement {
  // @property({ type: String }) type = "default";
  static get properties() {
    return { message: { type: String } };
  }
  // require 导入css/scss , 比如 const style  = require('./style.scss');  =>  return  [style.default]
  // static get styles() {
  //   return [];
  // }
  // static get styles(): CSSResult {
  //   return css``;
  // }

  constructor() {
    super();
    // this.message = "default";
  }

  render() {
    return html`
      <div>hello world</div>
    `;
  }
}
// 注意这里需要判断下，不然浏览器会报：Failed to execute 'define' on 'CustomElementRegistry': this name has already been used with this registry
// 所以不能用@customElement("at-button")写法 ，目前还没找到解决方案
if (!customElements.get("at-message")) {
  customElements.define("at-message", AtMessage);
}
