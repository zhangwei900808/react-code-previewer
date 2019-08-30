<html>MdPreviewer</html>

MdPreviewer 实时预览 markdown 文档，将自己制作的 markdown 文档翻译成 html 标签，极大方便开发人员制作说明文档统一排版及格式，通过属性 md 指定 markdown 文件。

- 注意：markdown 文档中如果设置<html>节点及内容，会渲染成可定位链接的 h2 标签。

markdown 文件内容：

```jsx
<html>PreviewLayout</html>
```

转译后：

```jsx
<h2 id="PreviewLayout" className="h2-link-container">
  <span className="title">PreviewLayout</span>
  <a href="#PreviewLayout">#</a>
</h2>
```
