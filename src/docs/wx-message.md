# wx-message

全局展示操作反馈信息。

## 使用方式

```html
<!-- 独立引入 -->
<script type="module">
  import WxMessage from "./node_modules/wx-element/components/wx-message.js";
  window.WxMessage = WxMessage;
  WxMessage.show({ type: "info", text: "message info" });
</script>
```

!> `<script type="module"></script>`中的变量是局部变量，如果需要`WxMessage`在全局范围内使用，可以执行`window.WxMessage = WxMessage;`。

> 如果是全部引用则没有这个问题，已经默认挂载在`window`对象上了

## WxMessage.show[level]

该组件是通过一个`show`静态方法调用即可应用`WxMessage`，根据传入参数`type`值的不同提供不同的类似`API`的应用，`type`值分为：`success | error | warning | loading |info`

```ts
WxMessage.show({
  type: "", // success | error | warning | loading |info
  text: "",
  duration: 3000,
  closeFn: null,
  icon: "" // 矢量图标名
});
```

所有方法返回均为`<wx-message></wx-message>`对象。

<wx-button type="primary" onclick="WxMessage.show({type:'info',text:'This a info message'})">info</wx-button>
<wx-button type="primary" onclick="WxMessage.show({type:'success',text:'This a success message'})">success</wx-button>
<wx-button type="primary" onclick="WxMessage.show({type:'error', text:'This a error message'})">error</wx-button>
<wx-button type="primary" onclick="WxMessage.show({type:'warning',text:'This a warning message'})">warning</wx-button>
<wx-button type="primary" onclick="WxMessage.show({type:'loading',text:'This a loading message'})">loading</wx-button>

| 参数       | 说明                                            | 类型       | 默认值 |
| ---------- | ----------------------------------------------- | ---------- | ------ |
| `type`     | 消息类型 info、success、error、warning、loading | `string`   | `''`   |
| `text`     | 提示内容                                        | `string`   | `''`   |
| `duration` | 自动关闭的延时，单位毫秒。设为 0 时不自动关闭   | `number`   | `3`    |
| `closeFn`  | 关闭时触发的回调函数                            | `Function` | -      |
| `icon`     | 自定义矢量图标名来定义类型,选填 icon 优先 type  | `string`   | `''`   |

其中，`WxMessage.loading`默认`duration`为`0`，表示不自动关闭，如果需要手动关闭，可以设置属性`show=false`。

<wx-button type="primary" onclick="this.messageEle = WxMessage.show({type:'loading',text:'This a loading message'})">show loading</wx-button>
<wx-button type="primary" onclick="this.previousElementSibling.messageEle.show = false">hide loading</wx-button>

```js
const messageEle = WxMessage.show({
  type: "loading",
  text: "This a loading message"
});
btn.onclick = function() {
  messageEle.show = false;
};
```

`onclose`还可以在外部指定，作用同上。

```js
const messageEle = WxMessage.show({
  type: "loading",
  text: "This a loading message"
});
messageEle.onclose = function() {
  this.show = false;
};
```

## WxMessage.show[custom icon]

`WxMessage.show`是一个更为通用的方法，可以自定义`icon`。

<wx-button type="primary" onclick="WxMessage.show({icon:'like',text:'I like it!'})">I like it!</wx-button>

```js
WxMessage.show({
  icon, //图标
  text, //提示内容
  duration, //延时，默认为3000
  closeFn //回调函数
});
```
