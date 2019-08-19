import React, { Component } from "react";
import { Button } from "antd";

class CodePreviewer extends Component {
  render() {
    return (
      <div className="code-preview-container">
        <div className="cp-component">
          <div className="component-header">header</div>
          <div className="component-content">content</div>
          <div className="component-footer">footer</div>
        </div>
        <div className="cp-code">
          <div className="code-header">code header</div>
          <div className="code-tabs">code tabs</div>
          <div className="code-content">code content</div>
        </div>
        <div>
          <Button type="primary"> 测试</Button>
        </div>
      </div>
    );
  }
}

export default CodePreviewer;
