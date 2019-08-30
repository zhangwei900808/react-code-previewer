import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
// import ReactHtmlParser from "react-html-parser";

class HtmlBlock extends PureComponent {
  renderHtml = () => {
    console.log("--- this.props ---", this.props);
    const { value, children } = this.props;
    if (value.includes("h2")) {
      let nodeValue = value.replace(/<[^<>]+>/g, "");
      //如果节点内容为空，就什么也不做
      if (nodeValue === "") {
        return value;
      }

      //如果节点内容不为空，就解析成可链接的 h2 标签
      return (
        <h2 id={nodeValue} className="h2-link-container">
          <span className="title">{nodeValue}</span>
          <a href={`#${nodeValue}`}>#</a>
        </h2>
      );
    } else {
      console.log("encodeURI()", value.replace("<"));

      //如果不是 <html></html> 节点 ，那么就是其他的 html 类型节点，我们转换成 html 节点再返回
      return <>{value}</>;
    }
  };
  render() {
    console.log("--- this.props ---", this.props);
    const { value, children } = this.props;
    return <>{children}</>;
  }
}

export default HtmlBlock;
