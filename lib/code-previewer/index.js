"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _reactSyntaxHighlighter = require("react-syntax-highlighter");

var _prism = require("react-syntax-highlighter/dist/esm/languages/prism");

var _coy = _interopRequireDefault(require("react-syntax-highlighter/dist/esm/styles/prism/coy"));

var _reactClipboard = _interopRequireDefault(require("react-clipboard.js"));

var _classnames = _interopRequireDefault(require("classnames"));

require("../fonts/iconfont.js");

var CodePreviewer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(CodePreviewer, _Component);

  function CodePreviewer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClipSuccess", function () {
      _this.setState({
        cliped: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClipLeave", function () {
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
    _reactSyntaxHighlighter.PrismLight.registerLanguage("jsx", _prism.jsx);

    _reactSyntaxHighlighter.PrismLight.registerLanguage("javascript", _prism.javascript);
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
    return _react["default"].createElement("div", {
      className: "code-preview-container"
    }, _react["default"].createElement("div", {
      className: "cp-component"
    }, _react["default"].createElement("div", {
      className: "component-content"
    }, children)), _react["default"].createElement("div", {
      className: "cp-code"
    }, _react["default"].createElement("div", {
      className: "code-header"
    }, _react["default"].createElement(_reactClipboard["default"], {
      className: "copy-wrapper",
      "data-clipboard-text": code,
      onSuccess: this.onClipSuccess
    }, _react["default"].createElement(_antd.Tooltip, {
      title: this.state.cliped ? "已复制" : "复制到剪切板",
      onMouseLeave: this.onClipLeave
    }, _react["default"].createElement("div", {
      className: "copy"
    }, _react["default"].createElement(_antd.Icon, {
      type: "copy",
      style: {
        fontSize: "16px"
      }
    })))), _react["default"].createElement("div", {
      className: "code-wrapper"
    }, _react["default"].createElement(_antd.Tooltip, {
      title: this.state.showCode ? "隐藏代码" : "显示代码"
    }, _react["default"].createElement("svg", {
      className: "icon icon-code",
      "aria-hidden": "true",
      onClick: function onClick() {
        return _this2.setState({
          showCode: !_this2.state.showCode
        });
      }
    }, _react["default"].createElement("use", {
      xlinkHref: this.state.showCode ? "#icon-code-close" : "#icon-code-open"
    }))))), _react["default"].createElement("div", {
      className: (0, _classnames["default"])({
        "code-content": true,
        "hide-code-content": !this.state.showCode
      })
    }, _react["default"].createElement(_reactSyntaxHighlighter.PrismLight, {
      language: "jsx",
      style: _coy["default"]
    }, code))));
  };

  return CodePreviewer;
}(_react.Component);

CodePreviewer.propTypes = {
  showCode: _propTypes["default"].bool,
  code: _propTypes["default"].string
};
CodePreviewer.defaultProps = {
  showCode: true
};
var _default = CodePreviewer;
exports["default"] = _default;
//# sourceMappingURL=index.js.map