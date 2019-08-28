import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

var PreviewLayout =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(PreviewLayout, _PureComponent);

  function PreviewLayout() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = PreviewLayout.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return React.createElement("div", {
      className: "preview-layout-container"
    }, children);
  };

  return PreviewLayout;
}(PureComponent);

PreviewLayout.propTypes = {};
PreviewLayout.defaultProps = {};
export default PreviewLayout;
//# sourceMappingURL=index.js.map