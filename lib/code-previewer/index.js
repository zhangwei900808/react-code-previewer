"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var CodePreviewer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(CodePreviewer, _Component);

  function CodePreviewer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CodePreviewer.prototype;

  _proto.render = function render() {
    _react["default"].createElement("div", {
      className: "code-preview-container"
    }, _react["default"].createElement("div", {
      className: "cp-component"
    }, _react["default"].createElement("div", {
      className: "component-header"
    }, "header"), _react["default"].createElement("div", {
      className: "component-content"
    }, "content"), _react["default"].createElement("div", {
      className: "component-footer"
    }, "footer")), _react["default"].createElement("div", {
      className: "cp-code"
    }, _react["default"].createElement("div", {
      className: "code-header"
    }, "code header"), _react["default"].createElement("div", {
      className: "code-tabs"
    }, "code tabs"), _react["default"].createElement("div", {
      className: "code-content"
    }, "code content")));
  };

  return CodePreviewer;
}(_react.Component);

var _default = CodePreviewer;
exports["default"] = _default;
//# sourceMappingURL=index.js.map