import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var CodePreviewer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(CodePreviewer, _Component);

  function CodePreviewer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CodePreviewer.prototype;

  _proto.render = function render() {
    React.createElement("div", {
      className: "code-preview-container"
    }, React.createElement("div", {
      className: "cp-component"
    }, React.createElement("div", {
      className: "component-header"
    }, "header"), React.createElement("div", {
      className: "component-content"
    }, "content"), React.createElement("div", {
      className: "component-footer"
    }, "footer")), React.createElement("div", {
      className: "cp-code"
    }, React.createElement("div", {
      className: "code-header"
    }, "code header"), React.createElement("div", {
      className: "code-tabs"
    }, "code tabs"), React.createElement("div", {
      className: "code-content"
    }, "code content")));
  };

  return CodePreviewer;
}(Component);

export default CodePreviewer;
//# sourceMappingURL=index.js.map