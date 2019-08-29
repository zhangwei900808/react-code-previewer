"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _codeBlock = _interopRequireDefault(require("../code-block"));

var htmlParser = require("react-markdown/plugins/html-parser");

var MdPreviewer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(MdPreviewer, _PureComponent);

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
    return _react["default"].createElement("div", {
      className: "markdown-previewer-container"
    }, _react["default"].createElement(_reactMarkdown["default"], {
      source: md,
      escapeHtml: false // astPlugins={[parseHtml]}
      ,
      renderers: {
        code: _codeBlock["default"]
      }
    }));
  };

  return MdPreviewer;
}(_react.PureComponent);

MdPreviewer.propTypes = {
  md: _propTypes["default"].string.isRequired
};
MdPreviewer.defaultProps = {
  md: null
};
var _default = MdPreviewer;
exports["default"] = _default;
//# sourceMappingURL=index.js.map