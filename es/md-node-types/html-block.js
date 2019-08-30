import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames"; // import ReactHtmlParser from "react-html-parser";

var HtmlBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HtmlBlock, _PureComponent);

  function HtmlBlock() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "renderHtml", function () {
      console.log("--- this.props ---", _this.props);
      var _this$props = _this.props,
          value = _this$props.value,
          children = _this$props.children;

      if (value.includes("h2")) {
        var nodeValue = value.replace(/<[^<>]+>/g, ""); //如果节点内容为空，就什么也不做

        if (nodeValue === "") {
          return value;
        } //如果节点内容不为空，就解析成可链接的 h2 标签


        return React.createElement("h2", {
          id: nodeValue,
          className: "h2-link-container"
        }, React.createElement("span", {
          className: "title"
        }, nodeValue), React.createElement("a", {
          href: "#" + nodeValue
        }, "#"));
      } else {
        console.log("encodeURI()", value.replace("<")); //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回

        return React.createElement(React.Fragment, null, value);
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
    return React.createElement(React.Fragment, null, children);
  };

  return HtmlBlock;
}(PureComponent);

export default HtmlBlock;
//# sourceMappingURL=html-block.js.map