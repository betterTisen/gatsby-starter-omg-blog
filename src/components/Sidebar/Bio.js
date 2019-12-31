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
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const bioClick = () => {
    console.log(1)
  }

  const { author } = data.site.siteMetadata
  return (
    <div className={`Bio-class`}>
      <div
        className={`head-img`}
        onClick={() => bioClick()}
        onKeyDown={()=>{}}
        role="button"
        tabIndex={0}
      >
        <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
      </div>
    </div>
  )
}

export default Bio
