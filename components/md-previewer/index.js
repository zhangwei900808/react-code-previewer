import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown/with-html";
import { CodeBlock, HeadingBlock } from "../md-node-types";
// const htmlParser = require("react-markdown/plugins/html-parser");

class MdPreviewer extends PureComponent {
  componentDidMount() {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#");
      console.log("hashParts", hashParts);

      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0];
        console.log("hash=", hash);

        document.querySelector(`#${hash}`).scrollIntoView();
      }
    };
    scrollToAnchor();
    window.onhashchange = scrollToAnchor;
  }
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
            code: CodeBlock,
            heading: HeadingBlock
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
