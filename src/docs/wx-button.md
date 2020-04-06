# wx-button

按钮。用于替代原生`button`。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
  import "./bundle.js";
</script>
<!-- 使用 -->
<wx-button>button</wx-button>
```

## 风格`type`

按钮有 5 种风格，分别为`primary`，`dashed`，`flat`，`danger`和默认。

<wx-button type="primary" id="btn">primary</wx-button>
<wx-button type="dashed">dashed</wx-button>
<wx-button type="flat">flat</wx-button>
<wx-button type="danger">danger</wx-button>
<wx-button>default</wx-button>

```html
<wx-button type="primary">primary</wx-button>
<wx-button type="dashed">dashed</wx-button>
<wx-button type="flat">flat</wx-button>
<wx-button type="danger">danger</wx-button>
<wx-button>default</wx-button>
```

## 链接`href`

当设置`href`属性时，`wx-button`内部会渲染成`a`标签。

<wx-button type="primary" href="https://github.com/huangjihua/wx-element">link a element</wx-button>
<wx-button type="dashed" href="https://github.com/huangjihua/wx-element">link a element</wx-button>
<wx-button type="flat" href="https://github.com/huangjihua/wx-element">link a element</wx-button>
<wx-button href="https://github.com/huangjihua/wx-element">link a element</wx-button>

```html
<wx-button href="https://github.com/huangjihua/wx-element"
  >link a element</wx-button
>
```

此外，还可以设置`download`、`target`和`rel`属性，同原生`a`标签。

<wx-img src="/img/gx.gif"></wx-img>

<wx-button href="/img/gx.gif" download="gx">download</wx-button>

```html
<wx-button href="/img/gx.gif" download="gx">download</wx-button>
```

## 禁用`disabled`

通过`disabled`可以禁用按钮，禁用后该按钮上的事件失效。

<wx-button disabled type="primary">primary</wx-button>
<wx-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wx-switch>

<wx-button disabled type="dashed">dashed</wx-button>
<wx-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wx-switch>

<wx-button disabled type="flat">flat</wx-button>
<wx-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wx-switch>

<wx-button disabled >default</wx-button>
<wx-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wx-switch>

<wx-button href="https://github.com/huangjihua/wx-element" disabled>visit wx-element</wx-button>
<wx-switch checked onchange="this.previousElementSibling.disabled = this.checked;"></wx-switch>

```html
<wx-button disabled type="primary">primary</wx-button>
<wx-button disabled type="dashed">dashed</wx-button>
<wx-button disabled type="flat">flat</wx-button>
<wx-button disabled>default</wx-button>
```

JavaScript 操作`get`、`set`

```js
btn.disabled; //获取
btn.disabled = false;
btn.disabled = true;
//原生属性操作
btn.getAttribute("disabled");
btn.setAttribute("disabled", "");
btn.removeAttribute("disabled");
```

!> 所有组件关于属性的获取和设置均类似，如下

```js
com.props; //获取
com.props = newProps;
//原生属性操作
com.setAttribute("props", newProps);
com.removeAttribute("props");
```

## 按钮组`wx-group`

`<wx-button-group>`可以将一组同类型的按钮组合起来。

<wx-group>
    <wx-button>button1</wx-button>
    <wx-button>button2</wx-button>
    <wx-button>button3</wx-button>
    <wx-button>button4</wx-button>
</wx-group>

<p></p>

<wx-group>
    <wx-button type="primary">button1</wx-button>
    <wx-button type="primary">button2</wx-button>
    <wx-button type="primary">button3</wx-button>
    <wx-button type="primary">button4</wx-button>
</wx-group>

<p></p>

<wx-group>
    <wx-button type="dashed">button1</wx-button>
    <wx-button type="dashed">button2</wx-button>
    <wx-button type="dashed">button3</wx-button>
    <wx-button type="dashed">button4</wx-button>
</wx-group>

<p></p>

<wx-group>
    <wx-button type="flat">button1</wx-button>
    <wx-button type="flat">button2</wx-button>
    <wx-button type="flat">button3</wx-button>
    <wx-button type="flat">button4</wx-button>
</wx-group>

<p></p>

<wx-group>
    <wx-button type="primary">button1</wx-button>
    <wx-button type="primary">button2</wx-button>
    <wx-button>button3</wx-button>
    <wx-button>button4</wx-button>
</wx-group>

```html
<wx-group>
  <wx-button>button1</wx-button>
  <wx-button>button2</wx-button>
  <wx-button>button3</wx-button>
  <wx-button>button4</wx-button>
</wx-group>
```

## 状态切换`toggle`

可以给按钮添加`toggle`属性，来实现简单的按钮状态切换。

可以简单的通过`checked`属性改变样式。

<style>
.button-toggle[checked]{
    background:var(--themeColor);
    color:#fff;
}
</style>

<wx-button toggle class="button-toggle">toggle button</wx-button>

```html
<style>
  .button-toggle[checked] {
    background: var(--themeColor);
    color: #fff;
  }
</style>
<wx-button toggle class="button-toggle">toggle button</wx-button>
```

也可以通过`js`获取到`checked`属性。

<wx-button toggle class="button-toggle" icon="like" onclick="WxMessage.show({icon:'like',duration:3000,text:this.checked?'I dislike it':'I like it'})">like</wx-button>

```js
btn.addEventListener("click", function(ev) {
  if (this.checked) {
    //do something
  } else {
    //do something
  }
});
```

## 加载`loading`

添加`loading`属性即可让按钮处于加载状态，处于加载状态所有事件会被禁用，类似于`disabled`

<wx-button type="primary" loading>loading</wx-button>
<wx-switch checked onchange="this.previousElementSibling.loading = this.checked;"></wx-switch>

```html
<wx-button type="primary" loading>loading</wx-button>
```

JavaScript 操作`get`、`set`

```js
btn.loading;
btn.loading = false;
btn.loading = true;
//原生属性操作
btn.getAttribute("loading");
btn.setAttribute("loading", "");
btn.removeAttribute("loading");
```

## 图标`icon`

当需要在`wx-button`内嵌入`wx-icon`时，可以设置`icon`属性。

关于`wx-icon`的取值可以查看[`wx-icon`](wx-icon.md)

<wx-button type="primary" icon="heart">like</wx-button>
<wx-button type="dashed" icon="search">search</wx-button>
<wx-button type="flat" icon="left">back</wx-button>
<wx-button icon="link">link</wx-button>

```html
<wx-button type="primary" icon="heart">like</wx-button>
<wx-button type="dashed" icon="search">search</wx-button>
<wx-button type="flat" icon="left">back</wx-button>
<wx-button icon="link">link</wx-button>
```

JavaScript 操作`set`

```js
btn.icon = "name";
//原生属性操作
btn.setAttribute("icon", "name");
```

当然，上述图标均位于文字左侧，如果想位于文字右侧，你可以直接嵌套`wx-icon`组件。

<wx-button>heart<wx-icon name="heart"></wx-icon></wx-button>
<wx-button>right<wx-icon name="right"></wx-icon></wx-button>

```html
<wx-button>heart <wx-icon name="heart"></wx-icon></wx-button>
<wx-button>right <wx-icon name="right"></wx-icon></wx-button>
```

## 形状`shape`

当只有`icon`时，可配合`shape=circle`属性，实现圆形图标按钮。

<wx-button type="primary" icon="heart" shape="circle"></wx-button>
<wx-button type="dashed" icon="heart" shape="circle"></wx-button>
<wx-button type="flat" icon="heart" shape="circle"></wx-button>
<wx-button icon="heart" shape="circle"></wx-button>

```html
<wx-button type="primary" icon="heart" shape="circle"></wx-button>
<wx-button type="dashed" icon="heart" shape="circle"></wx-button>
<wx-button type="flat" icon="heart" shape="circle"></wx-button>
<wx-button icon="heart" shape="circle"></wx-button>
```

## 块状`block`

`block`属性将使按钮适合其父宽度。

<wx-button type="primary" block>primary</wx-button>
<wx-button type="dashed" block>dashed</wx-button>
<wx-button type="flat" block>flat</wx-button>
<wx-button block>default</wx-button>

```html
<wx-button type="primary" block>primary</wx-button>
<wx-button type="dashed" block>dashed</wx-button>
<wx-button type="flat" block>flat</wx-button>
<wx-button block>default</wx-button>
```

当然该属性只是样式的重置，你可以通过`CSS`来实现

```css
wx-button {
  diplay: flex;
}
```

## 事件`event`

与普通`button`标签一致。

### onfocus、onblur

`focus`、`blur`后的回调事件。

<wx-button onfocus="WxMessage.show({type:'info',text:'focus'})" onblur="WxMessage.show({type:'info',text:'blur'})">primary</wx-button>

```html
<wx-button
  onfocus="WxMessage.show({type:'info',text:'blur'})"
  onblur="WxMessage.show({type:'info',text:'blur'})"
  >primary</wx-button
>
```

其他触发方式

```js
btn.onfocus = function(ev) {
  console.log(ev);
};

btn.addEventListener("focus", function(ev) {
  console.log(ev);
});
```

### 其他事件

`onclick`、`onmousedown`等等，使用方式同上。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`可以触发`click`事件。

<wx-button onclick="WxMessage.show({type:'info',text:'click'})" onfocus="WxMessage.show({type:'info',text:'focus'})" onblur="WxMessage.show({type:'info',text:'blur'})">primary</wx-button>
<wx-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wx-button>

```js
btn.focus();
```

## 自定义样式

目前可以修改的部分样式如下

```css
:host {
  display: inline-flex;
  padding: 0 0.8em;
  box-sizing: border-box;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  border-radius: 3px;
}
```

下面是一个自定义样式的按钮

<style>
.custom-button{
    font-size:20px;
    border-radius:50%;
    height:100px;
    width:100px;
}
</style>

<wx-button type="primary" class="custom-button">primary</wx-button>

```html
<style>
  .custom-button {
    font-size: 20px;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
</style>
<wx-button type="primary" class="custom-button">primary</wx-button>
```

也可以通过修改`font-size`来控制按钮尺寸

<style>
.custom-button2{
    font-size:30px;
}
</style>

<wx-button type="primary" class="custom-button2">primary</wx-button>

```html
<style>
  .custom-button2 {
    font-size: 30px;
  }
</style>
<wx-button type="primary" class="custom-button2">primary</wx-button>
```

> 大部分组件均可通过`font-size`来控制组件尺寸

此外，所有组件均有主题颜色`themeColor`，通过`CSS`自定义属性实现

详细可参考[主题](themeColor.md)。
