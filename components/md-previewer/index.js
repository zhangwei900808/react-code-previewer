import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../code-block";

class MarkdownPreviewer extends PureComponent {
  render() {
    const { md } = this.props;
    return (
      <div className="markdown-previewer-container">
        <ReactMarkdown
          source={md}
          escapeHtml={false}
          renderers={{
            code: CodeBlock
          }}
        />
      </div>
    );
  }
}

MarkdownPreviewer.propTypes = {
  md: PropTypes.string.isRequired
};

MarkdownPreviewer.defaultProps = {
  md: null
};

export default MarkdownPreviewer;
