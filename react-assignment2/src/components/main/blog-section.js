import React from "react";
import BlogCards from "./blogcards";
import styles from './main.module.css';
class BlogSection extends React.Component {
  render() {
    return <div className={styles.blogSection}>
        <BlogCards data={this.props.data}/>
    </div>;
  }
}

export default BlogSection;