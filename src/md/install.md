# React-Code-Previewer

基于 React 的代码演示组件，方便开发人员发布自己的组件库预览组件及代码。

## Install

```javascript
yarn add react-code-previewer
```

## Usage

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
