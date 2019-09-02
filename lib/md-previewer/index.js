"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withHtml = _interopRequireDefault(require("react-markdown/with-html"));

var _mdNodeTypes = require("../md-node-types");

// const htmlParser = require("react-markdown/plugins/html-parser");
var MdPreviewer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inheritsLoose2["default"])(MdPreviewer, _PureComponent);

  function MdPreviewer() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = MdPreviewer.prototype;

  _proto.componentDidMount = function componentDidMount() {// Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    // window.location.hash = window.decodeURIComponent(window.location.hash);
    // const scrollToAnchor = () => {
    //   const hashParts = window.location.hash.split("#");
    //   console.log("hashParts", hashParts);
    //   if (hashParts.length > 2) {
    //     const hash = hashParts.slice(-1)[0];
    //     console.log("hash=", hash);
    //     document.querySelector(`#${hash}`).scrollIntoView();
    //   }
    // };
    // scrollToAnchor();
    // window.onhashchange = scrollToAnchor;
  };

  _proto.render = function render() {
    var md = this.props.md; // var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
    // const parseHtml = htmlParser({
    //   isValidNode: node => {
    //     console.log("--- node ", node);
    //     return node.type !== "script";
    //   },
    //   processingInstructions: [
    //     {
    //       // Custom <h1> processing
    //       shouldProcessNode: function(node) {
    //         return node.parent && node.parent.name && node.parent.name === "h2";
    //       },
    //       processNode: function(node, children) {
    //         return node.data.toUpperCase();
    //       }
    //     },
    //     {
    //       // Anything else
    //       shouldProcessNode: function(node) {
    //         return true;
    //       },
    //       processNode: processNodeDefinitions.processDefaultNode
    //     }
    //   ]
    // });

    return _react["default"].createElement("div", {
      className: "markdown-previewer-container"
    }, _react["default"].createElement(_withHtml["default"], {
      source: md,
      escapeHtml: false // astPlugins={[parseHtml]}
      ,
      renderers: {
        code: _mdNodeTypes.CodeBlock,
        heading: _mdNodeTypes.HeadingBlock
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