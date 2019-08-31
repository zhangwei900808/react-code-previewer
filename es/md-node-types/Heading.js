import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from "react";
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
      props = _objectWithoutPropertiesLoose(_ref, ["level", "children"]);

  return React.createElement(elements[level] || elements.h1, props, children);
}

Heading.defaultProps = {
  type: "h1"
};
export default Heading;
//# sourceMappingURL=Heading.js.map