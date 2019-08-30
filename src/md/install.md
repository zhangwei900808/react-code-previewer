# React-Code-Previewer

基于 React 的代码演示组件，方便开发人员发布自己的组件库预览组件及代码。

<h2 id="Install"><span>Install</span> <a href="#Install">#</a></h2>

```javascript
yarn add react-code-previewer
```

<h2 id="Usage"><span>Usage</span> <a href="#Usage">#</a></h2>

```jsx
import { CodePreviewer, MdPreviewer, PreviewLayout } from "react-code-previewer";

ReactDOM.render(
  <PreviewLayout>
    <MdPreviewer md={installMd}></MdPreviewer>
    <CodePreviewer code={code} showCode={true}>
      your-component-here
    </CodePreviewer>
    <MdPreviewer md={apiMd}></MdPreviewer>
  </PreviewLayout>,
  mountNode
);
```
