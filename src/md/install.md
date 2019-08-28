# react-code-previewer

## Install

```javascript
yarn add react-code-previewer
```

## Usage

```jsx
import { CodePreviewer, MarkdownPreviewer, PreviewLayout } from "react-code-previewer";
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
