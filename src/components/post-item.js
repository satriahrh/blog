import React from "react"
import module from "../styles/post-list.module.scss"
import { Link } from "gatsby"

const PostItem = props => {
  let post = props.post
  return (
    <Link to={post.fields.slug} className={module.post}>
      <article className={module.post}>
        <header>
          <h2 className={module.title}>{post.frontmatter.title}</h2>
          <hr className={module.line}/>
          <p className={module.stamp}>
            published at {post.frontmatter.first_published}
          </p>
        </header>
        <section>
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