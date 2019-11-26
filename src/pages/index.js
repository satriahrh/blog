import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostItem from "../components/post-item"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home"/>
        <div>
          {posts.map(({ node }) => {
            return (
              <PostItem key={node.fields.slug} post={node}/>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___first_published], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        first_published(formatString: "MMMM DD, YYYY")
                        title
                        description
                        language
                    }
                }
            }
        }
    }
`
