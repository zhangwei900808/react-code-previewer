import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../code-block";

var MarkdownPreviewer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(MarkdownPreviewer, _PureComponent);

  function MarkdownPreviewer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MarkdownPreviewer.prototype;

  _proto.render = function render() {
    var md = this.props.md;
    return React.createElement("div", {
      className: "markdown-previewer-container"
    }, React.createElement(ReactMarkdown, {
      source: md,
      escapeHtml: false,
      renderers: {
        code: CodeBlock
      }
    }));
  };

  return MarkdownPreviewer;
}(PureComponent);

MarkdownPreviewer.propTypes = {
  md: PropTypes.string.isRequired
};
MarkdownPreviewer.defaultProps = {
  md: null
};
export default MarkdownPreviewer;
//# sourceMappingURL=index.js.map