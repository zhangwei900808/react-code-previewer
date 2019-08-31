import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Heading from "./Heading";

var HeadingBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeadingBlock, _PureComponent);

  function HeadingBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderHtml", function () {
      var _this$props = _this.props,
          level = _this$props.level,
          children = _this$props.children;

      if (children && children.length > 0) {
        var nodeValue = children[0].props.value;
        return React.createElement(Heading, {
          level: "h" + level,
          id: nodeValue
        }, React.createElement("span", {
          className: "title"
        }, children), React.createElement("a", {
          href: "#" + nodeValue,
          className: "link"
        }, "#"));
      } else {
        //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回
        return React.createElement(React.Fragment, null, children);
      }
    });

    return _this;
  }

  var _proto = HeadingBlock.prototype;

  _proto.render = function render() {
    return React.createElement(React.Fragment, null, this.renderHtml());
  };

  return HeadingBlock;
}(PureComponent);

export default HeadingBlock;
//# sourceMappingURL=heading-block.js.map