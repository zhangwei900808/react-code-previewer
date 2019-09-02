import React, { Component } from "react";
import { Button, Layout, Icon } from "antd";
import { Map } from "immutable";
import CodePreviewer from "../../components/code-previewer";
import "../../components/code-previewer/style";
import MdPreviewer from "../../components/md-previewer";
import "../../components/md-previewer/style";
import PreviewLayout from "../../components/preview-layout";
import "../../components/preview-layout/style";
import "./codePreviewerPage.pcss";
import logo from "../assets/images/hiynn-design.png";
import installMd from "../md/install.md";
import apiMd from "../md/api.md";
import previewLayoutMd from "../md/previewLayout.md";
import mdPreviewerMd from "../md/mdPreviewer.md";
import codePreviewMd from "../md/codePreviewer.md";
import markdownMd from "../md/markdown.md";
const { Header, Content, Footer } = Layout;

class CodePreviewerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sider: Map({
        width: 230,
        theme: "light",
        breakpoint: "lg",
        collapsed: false
      }),
      title: "React Code Previewer",
      subTitle: "基于 React 的代码查看器"
    };
  }
  toggleCollapse = () => {
    this.setState({
      sider: this.state.sider.set("collapsed", !this.state.sider.get("collapsed"))
    });
  };
  github = () => {
    window.location.href = "https://github.com/zhangwei900808/react-code-previewer";
  };
  render() {
    const mdCode = `import markdownMd from "../md/markdown.md";
import { MdPreviewer } from "react-code-previewer";

<MdPreviewer md={markdownMd}></MdPreviewer>`;
    const buttonCode = `import { CodePreviewer } from "react-code-previewer";
    
<CodePreviewer code={code} showCode={true}>
  <Button type="primary" size="large">
    primary
  </Button>
</CodePreviewer>`;
    return (
      <Layout className="layout-container">
        <Header className="header-container">
          <div className="header-left">
            <img src={logo} width={32}></img>
            <span className="title">React Code Previewer</span>
          </div>
          <div className="header-right" onClick={() => this.github()}>
            <Icon type="github" style={{ fontSize: "28px" }} />
          </div>
        </Header>
        <Content className="content-container">
          <div>
            <PreviewLayout>
              <MdPreviewer md={installMd}></MdPreviewer>
              <MdPreviewer md={previewLayoutMd}></MdPreviewer>
              <MdPreviewer md={mdPreviewerMd}></MdPreviewer>
              <CodePreviewer code={mdCode} showCode={true}>
                <MdPreviewer md={markdownMd}></MdPreviewer>
              </CodePreviewer>
              <MdPreviewer md={codePreviewMd}></MdPreviewer>
              <CodePreviewer code={buttonCode} showCode={true}>
                <Button type="primary" size="large">
                  primary
                </Button>
              </CodePreviewer>
              <MdPreviewer md={apiMd}></MdPreviewer>
            </PreviewLayout>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default CodePreviewerPage;
