import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Tooltip } from "antd";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";
import coy from "react-syntax-highlighter/dist/esm/styles/prism/coy";
import Clipboard from "react-clipboard.js";
import cls from "classnames";
import "../fonts/iconfont.js";

class CodePreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliped: false,
      showCode: false
    };
  }

  componentWillMount() {
    // 如果不加这段样式显示不出来
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  }
  onClipSuccess = () => {
    this.setState({
      cliped: true
    });
  };
  onClipLeave = () => {
    setTimeout(() => {
      this.setState({
        cliped: false
      });
    }, 300);
  };
  componentDidMount() {
    const { showCode } = this.props;
    this.setState({
      showCode
    });
  }
  render() {
    const { children, code } = this.props;
    return (
      <div className="code-preview-container">
        <div className="cp-component">
          <div className="component-content">{children}</div>
        </div>
        <div className="cp-code">
          <div className="code-header">
            <Clipboard className="copy-wrapper" data-clipboard-text={code} onSuccess={this.onClipSuccess}>
              <Tooltip title={this.state.cliped ? "已复制" : "复制到剪贴板"} onMouseLeave={this.onClipLeave}>
                <div className="copy">
                  <Icon type="copy" style={{ fontSize: "16px" }} />
                </div>
              </Tooltip>
            </Clipboard>
            <div className="code-wrapper">
              <Tooltip title={this.state.showCode ? "隐藏代码" : "显示代码"}>
                <svg className="icon icon-code" aria-hidden="true" onClick={() => this.setState({ showCode: !this.state.showCode })}>
                  <use xlinkHref={this.state.showCode ? "#icon-code-close" : "#icon-code-open"}></use>
                </svg>
              </Tooltip>
            </div>
          </div>
          {/* <div className="code-tabs">code tabs</div> */}
          <div className={cls({ "code-content": true, "hide-code-content": !this.state.showCode })}>
            <SyntaxHighlighter language="jsx" style={coy}>
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
        {/* <div>sdfsdf</div> */}
      </div>
    );
  }
}

CodePreviewer.propTypes = {
  showCode: PropTypes.bool,
  code: PropTypes.string
};
CodePreviewer.defaultProps = {
  showCode: true
};

export default CodePreviewer;
