import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../code-block";
const htmlParser = require("react-markdown/plugins/html-parser");

class MdPreviewer extends PureComponent {
  render() {
    const { md } = this.props;
    const parseHtml = htmlParser({
      isValidNode: node => node.type !== "script",
      processingInstructions: [
        /* ... */
      ]
    });
    return (
      <div className="markdown-previewer-container">
        <ReactMarkdown
          source={md}
          escapeHtml={false}
          // astPlugins={[parseHtml]}
          renderers={{
            code: CodeBlock
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
