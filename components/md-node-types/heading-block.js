import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import Heading from "./Heading";

class HeadingBlock extends PureComponent {
  renderHtml = () => {
    const { level, children } = this.props;

    if (children && children.length > 0) {
      const nodeValue = children[0].props.value;
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          <span className="title">{children}</span>
          <a href={`#${nodeValue}`} className="link">
            #
          </a>
        </Heading>
      );
    } else {
      //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回
      return <>{children}</>;
    }
  };
  render() {
    return <>{this.renderHtml()}</>;
  }
}

export default HeadingBlock;
