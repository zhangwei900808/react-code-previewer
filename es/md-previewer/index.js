import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../code-block";

var htmlParser = require("react-markdown/plugins/html-parser");

var MdPreviewer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(MdPreviewer, _PureComponent);

  function MdPreviewer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MdPreviewer.prototype;

  _proto.render = function render() {
    var md = this.props.md;
    var parseHtml = htmlParser({
      isValidNode: function isValidNode(node) {
        return node.type !== "script";
      },
      processingInstructions: [
        /* ... */
      ]
    });
    return React.createElement("div", {
      className: "markdown-previewer-container"
    }, React.createElement(ReactMarkdown, {
      source: md,
      escapeHtml: false // astPlugins={[parseHtml]}
      ,
      renderers: {
        code: CodeBlock
      }
    }));
  };

  return MdPreviewer;
}(PureComponent);

MdPreviewer.propTypes = {
  md: PropTypes.string.isRequired
};
MdPreviewer.defaultProps = {
  md: null
};
export default MdPreviewer;
//# sourceMappingURL=index.js.map