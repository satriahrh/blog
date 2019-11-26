import React from "react";
import module from "../styles/post-single.module.scss";
import Bio from "./bio"

const PostSingle = props => {
  const post = props.post;
  return (
    <article className={module.single}>
      <header>
        <h1 className={module.title}>{post.frontmatter.title}</h1>
        <hr className={module.line} />
        <p className={module.stamp}>
          published at {post.frontmatter.first_published}
        </p>
      </header>
      <div
        className={module.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <footer>
        <Bio />
      </footer>
    </article>
  );
};

export default PostSingle;
