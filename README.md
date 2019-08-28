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

## Setting

如果是要引入.md 文件，要在 webpack.config.js 文件加入下面这段代码，如下所示：

```
yarn add -D raw-loader
npm install -D raw-loader
```

```javascript
 rules: [
    {
        test: /\.md$/,
        use: "raw-loader"
    },
```

## contact me

> zw900808@gmail.com
