# react-code-previewer

## Install

```javascript
yarn add react-code-previewer
```

<span style="color:red; font-family:Helvetica Neue, Helvetica, Arial, sans-serif; font-size:2em;">sdfsdf
</span>

<h1>ddd</h1>

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
