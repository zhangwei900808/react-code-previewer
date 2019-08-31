"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6"
};

function Heading(_ref) {
  var level = _ref.level,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["level", "children"]);
  return _react["default"].createElement(elements[level] || elements.h1, props, children);
}

Heading.defaultProps = {
  type: "h1"
};
var _default = Heading;
exports["default"] = _default;
//# sourceMappingURL=Heading.js.map