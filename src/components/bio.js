/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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

  const { author, social } = data.site.siteMetadata
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
        You should <strike>hire</hire> contact me :p
      </p>
    </div>
  )
}

export default Bio
