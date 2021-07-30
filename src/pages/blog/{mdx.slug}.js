import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }) => {
    const image = getImage(data.mdx.frontmatter.thumb)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.title} />
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumb {
            publicURL
            childImageSharp {
            gatsbyImageData(width: 500)
            }
        }
      }
      body
    }
  }
`

export default BlogPost