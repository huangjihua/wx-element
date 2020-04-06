# wx-switch

开关选择器。

## 使用方式

```html
<!-- 引入 -->
<script type="module">
  import "./node_modules/wx-element/components/wx-switch.js";
</script>
<!-- 使用 -->
<wx-switch></wx-switch>
```

## 禁用`disabled`

通过`disabled`可以禁用开关。

<wx-switch disabled></wx-switch>
<wx-button type="primary" onclick="this.previousElementSibling.disabled=!this.previousElementSibling.disabled">禁用切换</wx-button>

```html
<wx-switch disabled></wx-switch>
```

JavaScript 操作

```js
switch.disabled;//获取
switch.disabled = false;
switch.disabled = true;
//原生属性操作
switch.setAttribute('disabled','');
switch.removeAttribute('disabled');
```

## 选中`checked`

`checked`属性表示选中。

<wx-switch checked></wx-switch>
<wx-button type="primary" onclick="this.previousElementSibling.checked=!this.previousElementSibling.checked">选中切换</wx-button>

```html
<wx-switch checked></wx-switch>
```

JavaScript 操作

```js
switch.checked;//获取
switch.checked = false;
switch.checked = true;
//原生属性操作
switch.setAttribute('checked','');
switch.removeAttribute('checked');
```

## 自定义尺寸

内部采用`em`相对尺寸，可通过`font-size`来控制大小。

<wx-switch checked></wx-switch>
<wx-slider min="10" max="50" defaultvalue="16" suffix="px" showtips oninput="this.previousElementSibling.style.fontSize=this.value+'px'" ></wx-slider>

```html
<style>
  wx-switch {
    font-size: 20px;
  }
</style>
<wx-switch checked></wx-switch>
```

## 事件`event`

### onchange

在切换完成时触发。

<wx-switch onchange="WxMessage.show({type:'info',text:'当前状态checked:'+this.checked})"></wx-switch>

```html
<wx-switch
  onchange="WxMessage.show({type:'info',text:'当前状态checked:'+this.checked})"
></wx-switch>
```

```js
switch.onchange = function(ev){
    //获取checked的几种方式
    /*
    event:{
        detail:{
            checked,
        }
    }
    */
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
}

switch.addEventListener('change',function(ev){
    console.log(this.checked);
    console.log(ev.target.checked);
    console.log(ev.detail.checked);
})
```

### onfocus、onblur

`focus`、`blur`后的回调事件。

与[`wx-button`](wx-button.md?id=onfocus、onblur)使用方式一致。

## 方法`function`

### focus

用于主动聚焦`focus`，聚焦以后可以响应键盘事件，`Enter`切换开关。

<wx-switch onfocus="WxMessage.show({type:'info',text:'focus'})" onchange="WxMessage.show({type:'info',text:'当前状态checked:'+this.checked})"></wx-switch>
<wx-button type="primary" onclick="this.previousElementSibling.focus()">主动聚焦</wx-button>

```js
switch.focus();
```
