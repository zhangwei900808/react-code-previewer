# react-code-previewer &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zhangwei900808/react-code-previewer) [![npm version](https://img.shields.io/npm/v/react-code-previewer.svg)](https://www.npmjs.com/package/react-code-previewer)

## Install

```
yarn add react-code-previewer
npm install react-code-previewer
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

## contact me

> zw900808@gmail.com
