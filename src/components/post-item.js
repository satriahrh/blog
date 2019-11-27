import React from "react"
import module from "../styles/post-list.module.scss"
import { Link } from "gatsby"

const PostItem = props => {
  let post = props.post
  return (
    <Link to={post.fields.slug} className={module.post}>
      <article className={module.post}>
        <header className={module.header}>
          <h2 className={module.title}>{post.frontmatter.title}</h2>
          <small className={module.stamp}>
            published at {post.frontmatter.date}
          </small>
        </header>
        <section className={module.section}>
          <p className={module.description}
             dangerouslySetInnerHTML={{
               __html: post.frontmatter.description || post.excerpt,
             }}
          />
        </section>
      </article>
    </Link>
  )
}

export default PostItem;