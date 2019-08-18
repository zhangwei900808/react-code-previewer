import React, { Component } from "react";
import CodePreviewer from "../../components/code-previewer";
import "../../components/code-previewer/style";

class CodePreviewerPage extends Component {
  render() {
    return (
      <div>
        <CodePreviewer />
      </div>
    );
  }
}

export default CodePreviewerPage;
