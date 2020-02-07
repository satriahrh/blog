import React from "react"
import { Link, graphql } from "gatsby"
import { Disqus } from "gatsby-plugin-disqus"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSingle from "../components/post-single"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteMetadata = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext

    const siteTitle = siteMetadata.title
    const disqusConfig = {
      url: `${siteMetadata.siteUrl}/${post.fields.slug}`,
      identifier: post.fields.slug,
      title: post.frontmatter.title,
    }

    return (
      <Layout title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostSingle post={post} />

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>

        <Disqus config={disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
