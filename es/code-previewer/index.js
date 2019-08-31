import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon, Tooltip } from "antd";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";
import coy from "react-syntax-highlighter/dist/esm/styles/prism/coy";
import Clipboard from "react-clipboard.js";
import cls from "classnames";
import "../fonts/iconfont.js";

var CodePreviewer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(CodePreviewer, _Component);

  function CodePreviewer(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "onClipSuccess", function () {
      _this.setState({
        cliped: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClipLeave", function () {
      setTimeout(function () {
        _this.setState({
          cliped: false
        });
      }, 300);
    });

    _this.state = {
      cliped: false,
      showCode: false
    };
    return _this;
  }

  var _proto = CodePreviewer.prototype;

  _proto.componentWillMount = function componentWillMount() {
    // 如果不加这段样式显示不出来
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  };

  _proto.componentDidMount = function componentDidMount() {
    var showCode = this.props.showCode;
    this.setState({
      showCode: showCode
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        code = _this$props.code;
    return React.createElement("div", {
      className: "code-preview-container"
    }, React.createElement("div", {
      className: "cp-component"
    }, React.createElement("div", {
      className: "component-content"
    }, children)), React.createElement("div", {
      className: "cp-code"
    }, React.createElement("div", {
      className: "code-header"
    }, React.createElement(Clipboard, {
      className: "copy-wrapper",
      "data-clipboard-text": code,
      onSuccess: this.onClipSuccess
    }, React.createElement(Tooltip, {
      title: this.state.cliped ? "已复制" : "复制到剪贴板",
      onMouseLeave: this.onClipLeave
    }, React.createElement("div", {
      className: "copy"
    }, React.createElement(Icon, {
      type: "copy",
      style: {
        fontSize: "16px"
      }
    })))), React.createElement("div", {
      className: "code-wrapper"
    }, React.createElement(Tooltip, {
      title: this.state.showCode ? "隐藏代码" : "显示代码"
    }, React.createElement("svg", {
      className: "icon icon-code",
      "aria-hidden": "true",
      onClick: function onClick() {
        return _this2.setState({
          showCode: !_this2.state.showCode
        });
      }
    }, React.createElement("use", {
      xlinkHref: this.state.showCode ? "#icon-code-close" : "#icon-code-open"
    }))))), React.createElement("div", {
      className: cls({
        "code-content": true,
        "hide-code-content": !this.state.showCode
      })
    }, React.createElement(SyntaxHighlighter, {
      language: "jsx",
      style: coy
    }, code))));
  };

  return CodePreviewer;
}(Component);

CodePreviewer.propTypes = {
  showCode: PropTypes.bool,
  code: PropTypes.string
};
CodePreviewer.defaultProps = {
  showCode: true
};
export default CodePreviewer;
//# sourceMappingURL=index.js.map