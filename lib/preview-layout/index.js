"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var PreviewLayout =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(PreviewLayout, _PureComponent);

  function PreviewLayout() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = PreviewLayout.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return _react["default"].createElement("div", {
      className: "preview-layout-container"
    }, children);
  };

  return PreviewLayout;
}(_react.PureComponent);

PreviewLayout.propTypes = {};
PreviewLayout.defaultProps = {};
var _default = PreviewLayout;
exports["default"] = _default;
//# sourceMappingURL=index.js.map