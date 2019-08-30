import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown";
import { CodeBlock, HtmlBlock } from "../md-node-types";
// const htmlParser = require("react-markdown/plugins/html-parser");
// var HtmlToReact = require("html-to-react");

class MdPreviewer extends PureComponent {
  render() {
    const { md } = this.props;
    // var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
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
    return (
      <div className="markdown-previewer-container">
        <ReactMarkdown
          source={md}
          escapeHtml={false}
          // astPlugins={[parseHtml]}
          renderers={{
            code: CodeBlock
            // heading: HtmlBlock
          }}
        />
      </div>
    );
  }
}

MdPreviewer.propTypes = {
  md: PropTypes.string.isRequired
};

MdPreviewer.defaultProps = {
  md: null
};

export default MdPreviewer;
