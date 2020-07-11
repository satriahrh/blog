/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div>
      <p>
        Written by <strong>{author}</strong>, Software Engineer Backend,
        currently at Jakarta, Indonesia.
        {` `}
        You should <strike>hire</strike> contact me by email at{" "}
        <a href="mailto:satriahrh@gmail.com">satriahrh@gmail.com</a>
      </p>
      <p>
        Do not forget to <strong>comment</strong> below,
        and <strong>share</strong> my articles to your friend, and ask them to
        discuss below.
      </p>
    </div>
  )
}

export default Bio
