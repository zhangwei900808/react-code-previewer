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

var _Heading = _interopRequireDefault(require("./Heading"));

var HeadingBlock =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(HeadingBlock, _PureComponent);

  function HeadingBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHtml", function () {
      var _this$props = _this.props,
          level = _this$props.level,
          children = _this$props.children;

      if (children && children.length > 0) {
        var nodeValue = children[0].props.value;
        return _react["default"].createElement(_Heading["default"], {
          level: "h" + level,
          id: nodeValue
        }, _react["default"].createElement("span", {
          className: "title"
        }, children), _react["default"].createElement("a", {
          href: "#" + nodeValue,
          className: "link"
        }, "#"));
      } else {
        //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回
        return _react["default"].createElement(_react["default"].Fragment, null, children);
      }
    });
    return _this;
  }

  var _proto = HeadingBlock.prototype;

  _proto.render = function render() {
    return _react["default"].createElement(_react["default"].Fragment, null, this.renderHtml());
  };

  return HeadingBlock;
}(_react.PureComponent);

var _default = HeadingBlock;
exports["default"] = _default;
//# sourceMappingURL=heading-block.js.map