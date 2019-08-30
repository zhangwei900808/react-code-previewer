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

var _classnames = _interopRequireDefault(require("classnames"));

// import ReactHtmlParser from "react-html-parser";
var HtmlBlock =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(HtmlBlock, _PureComponent);

  function HtmlBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHtml", function () {
      console.log("--- this.props ---", _this.props);
      var _this$props = _this.props,
          value = _this$props.value,
          children = _this$props.children;

      if (value.includes("h2")) {
        var nodeValue = value.replace(/<[^<>]+>/g, ""); //如果节点内容为空，就什么也不做

        if (nodeValue === "") {
          return value;
        } //如果节点内容不为空，就解析成可链接的 h2 标签


        return _react["default"].createElement("h2", {
          id: nodeValue,
          className: "h2-link-container"
        }, _react["default"].createElement("span", {
          className: "title"
        }, nodeValue), _react["default"].createElement("a", {
          href: "#" + nodeValue
        }, "#"));
      } else {
        console.log("encodeURI()", value.replace("<")); //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回

        return _react["default"].createElement(_react["default"].Fragment, null, value);
      }
    });
    return _this;
  }

  var _proto = HtmlBlock.prototype;

  _proto.render = function render() {
    console.log("--- this.props ---", this.props);
    var _this$props2 = this.props,
        value = _this$props2.value,
        children = _this$props2.children;
    return _react["default"].createElement(_react["default"].Fragment, null, children);
  };

  return HtmlBlock;
}(_react.PureComponent);

var _default = HtmlBlock;
exports["default"] = _default;
//# sourceMappingURL=html-block.js.map