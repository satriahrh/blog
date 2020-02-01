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
    <div
      style={{
        display: `flex`,
        // marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by <strong>{author}</strong>, Software Engineer Backend,
        currently at Jakarta and always open.
        {` `}
        You should <strike>hire</strike> contact me :p by email at{" "}
        <a href="mailto:satriahrh@gmail.com">satriahrh@gmail.com</a>
      </p>
    </div>
  )
}

export default Bio
