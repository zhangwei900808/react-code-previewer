import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";

var CodeBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(CodeBlock, _PureComponent);

  function CodeBlock() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CodeBlock.prototype;

  _proto.componentWillMount = function componentWillMount() {
    // 如果不加这段样式显示不出来
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        language = _this$props.language,
        value = _this$props.value;
    return React.createElement("figure", {
      className: "highlight"
    }, React.createElement(SyntaxHighlighter, {
      language: language,
      style: coy
    }, value));
  };

  return CodeBlock;
}(PureComponent);

_defineProperty(CodeBlock, "propTypes", {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
});

_defineProperty(CodeBlock, "defaultProps", {
  language: null
});

export default CodeBlock;
//# sourceMappingURL=code-block.js.map