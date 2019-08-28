import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

class PreviewLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="preview-layout-container">{children}</div>;
  }
}

PreviewLayout.propTypes = {};

PreviewLayout.defaultProps = {};

export default PreviewLayout;
