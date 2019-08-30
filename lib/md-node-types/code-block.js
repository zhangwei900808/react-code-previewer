"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _prism = require("react-syntax-highlighter/dist/esm/styles/prism");

var _prism2 = require("react-syntax-highlighter/dist/esm/languages/prism");

var CodeBlock =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(CodeBlock, _PureComponent);

  function CodeBlock() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CodeBlock.prototype;

  _proto.componentWillMount = function componentWillMount() {
    // 如果不加这段样式显示不出来
    _reactSyntaxHighlighter.PrismLight.registerLanguage("jsx", _prism2.jsx);

    _reactSyntaxHighlighter.PrismLight.registerLanguage("javascript", _prism2.javascript);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        language = _this$props.language,
        value = _this$props.value;
    return _react["default"].createElement("figure", {
      className: "highlight"
    }, _react["default"].createElement(_reactSyntaxHighlighter.PrismLight, {
      language: language,
      style: _prism.coy
    }, value));
  };

  return CodeBlock;
}(_react.PureComponent);

(0, _defineProperty2["default"])(CodeBlock, "propTypes", {
  value: _propTypes["default"].string.isRequired,
  language: _propTypes["default"].string
});
(0, _defineProperty2["default"])(CodeBlock, "defaultProps", {
  language: null
});
var _default = CodeBlock;
exports["default"] = _default;
//# sourceMappingURL=code-block.js.map