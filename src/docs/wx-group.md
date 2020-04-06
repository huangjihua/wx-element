# wx-group

分组，可以将任何组件和元素进行横向或纵向分组。

## 使用方法

```html
<!-- 引入 -->
<script type="module">
  import "./node_modules/wx-element/components/wx-group.js";
</script>
<!-- 使用 -->
<wx-group>
  <wx-button>button1</wx-button>
  <wx-button>button2</wx-button>
  <wx-button>button3</wx-button>
  <wx-button>button4</wx-button>
</wx-group>
```

## 按钮组`wx-group`

`<wx-group>`可以将一组同类型的按钮组合起来。

<wx-group>
    <wx-button>button1</wx-button>
    <wx-button>button2</wx-button>
    <wx-button>button3</wx-button>
    <wx-button>button4</wx-button>
</wx-group>
<p></p>

## 垂直类型

`wx-group`包含`column`属性即可将要分组的垂直排列

<wx-group column>
   <wx-icon name="user"></wx-icon>
  <wx-icon name="location"></wx-icon>
  <wx-icon name="message"></wx-icon>
  <wx-icon name="heart"></wx-icon>
  <wx-icon name="send"></wx-icon>
  <wx-icon name="comment"></wx-icon>
  <wx-icon name="audio"></wx-icon>
  <wx-icon name="apple"></wx-icon>
</wx-group>

```html
<wx-group column>
  <wx-icon name="user"></wx-icon>
  <wx-icon name="location"></wx-icon>
  <wx-icon name="message"></wx-icon>
  <wx-icon name="heart"></wx-icon>
  <wx-icon name="send"></wx-icon>
  <wx-icon name="comment"></wx-icon>
  <wx-icon name="audio"></wx-icon>
  <wx-icon name="apple"></wx-icon>
</wx-group>
```
