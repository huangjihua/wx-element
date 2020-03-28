# wx-element

`wx-element`基于原生`web Components`规范开发的跨框架 UI 组件库。[查看文档]()
[github 项目地址](https://github.com/huangjihua/wx-element)

## 更新

- ## 1.0.0

  - 新增[at-loading](./docs/at-loading.md)组件

## 特性

- 跨框架， 无论是`vue`、`react`、`Angular`还是原生项目均可使用。
- 组件化，`shadow dom`真正意义上实现了样式和功能的组件化。
- 同原生，一个多元化组件就像使用一个简单的`div`标签一样。
- 无依赖，纯原生。无需任何预处理器编译。
- 无障碍，支持键盘访问

## 兼容性

现代浏览器，包括移动端浏览器，但不支持`IE`

> `IE`不支持原生`customElements`,[webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)可以实现对`IE`的兼容，但是还是有很多`CSS`特性不支持，所有谨慎使用。

## 安装

- npm

```shell
npm i wx-element
```

- cdn

```html
<script type="module">
  import "https://unpkg.com/wx-element";
  import "https://unpkg.com/wx-element@1.1.2"; // 制定版本号
</script>

<script type="module" src="https://unpkg.com/wx-element"></script>
```

- 直接在`github`上获取最新文件。

目录结构如下：

```text
.
└──web-components
   ├── components // 功能组件
       ├──scss // 功能组件样式
       |  ├──wx-button.scss
   |   ├── wx-button.js
   |   └── ...
   └── iconfont // 图标库
       └── ...
   ├── docs // 文档
```

如果把整个文件放入项目中

### html 引用

```html
<script type="module">
  import "./node_modules/wx-element/index.js"; //推荐
  //如需单独使用，文档中都是单独使用的情况，推荐全部引用，即第一种方式。
  import "./node_modules/wx-element/components/wx-button.js";
</script>
<wx-button>button</wx-button>
```

> 现代浏览器支持原生`import`语法，不过需要注意`script`的类型`type="module"`。

### vue 项目引用

```js
import wxElement from "wx-element";
Vue.use(wxElement); // 全局使用
// 独立使用
import wxButton from "wx-element/components/wx-button";
<wx-button>button</wx-button>;
```

### react 项目引用

```js
import "wx-element"; //推荐
//如需单独使用
import "wx-element/components/wx-button.js";
ReactDOM.render(<wx-button>button</wx-button>, document.body);
```

> 关于`react`中使用`Web Components`的注意细节可参考[https://react.docschina.org/docs/web-components.html](https://react.docschina.org/docs/web-components.html)

## License

[MIT](LICENSE)
