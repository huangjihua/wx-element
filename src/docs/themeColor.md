# theme

`wx-element`的所有组件均可设置`themeColor`，不同于一些框架采用`less`、`sass`等预处理器， 这里采用`CSS`[自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)（`--themeColor`）实现。

每个组件可以单独设置（并不推荐，影响统一风格），也可以全局设置（推荐）。

```css
wx-button {
  --themeColor: #42b983; /**单独设置**/
}
:root {
  --themeColor: #42b983; /**全局设置**/
}
```

也可以通过`JavaScript`实时修改。

```js
document.body.style.setProperty("--themeColor", "#F44336");
```

除了主题颜色`themeColor`以外，还支持如下主题定制

```css
:root {
  --fontColor: #333; /*文字颜色*/
  --borderColor: #d9d9d9; /*边框颜色，按钮、输入框*/
  --borderRadius: 3px; /*圆角*/
  --successColor: #52c41a; /*成功色*/
  --waringColor: #faad14; /*警告色*/
  --errorColor: #f4615c; /*错误色*/
  --infoColor: #1890ff; /*提示色*/
  --dangerColor: #ff7875; /*危险色*/
}
```

<!-- <xy-color-pane defaultvalue="#42b983" onchange="changeColor(this.value)"><xy-color-pane> -->

实时预览

<wx-button type="primary">primary</wx-button>
<wx-button type="dashed">dashed</wx-button>
<wx-button type="flat">flat</wx-button>
<wx-button>default</wx-button>
<wx-button type="primary" loading>loading</wx-button>

可以通过`--themeBackground`来自定义背景（部分组件支持，如`button`、`switch`等），比如渐变色

```css
:root {
  --themeBackground: linear-gradient(-180deg, #2fcb53, #269f42 90%);
}
```

<div style="--themeBackground:linear-gradient(-180deg,#2fcb53,#269f42 90%);--themeColor: #269f42">
<wx-button type="primary">primary</wx-button>
<wx-button type="dashed">dashed</wx-button>
<wx-button type="flat">flat</wx-button>
<wx-button>default</wx-button>
<wx-button type="primary" loading>loading</wx-button>

> 注意和`--themeColor`搭配使用，其他比如字体颜色仍取自`--themeColor`，只有背景部分才优先取自`--themeBackground`，同时，使用`--themeBackground`会失去动画效果。
