import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { 
    piezasGrid
} from './piezas.module.css'

const Piezas = ({ pageTitle, children}) => {
    const data = useStaticQuery(graphql`
      query {
        allMdx(filter: {frontmatter: {tipo: {eq: "piezas"}}}) {
            nodes {
              id
              frontmatter {
                title
                tipo
                thumb {
                  publicURL
                  childImageSharp {
                    gatsbyImageData(width: 300)
                  }
                }
              }
            }
          }
        }
  `)
    return (
        <div className={piezasGrid}>
            {
                data.allMdx.nodes.map((node) => (
                    <article>
                        <h3>{node.frontmatter.title}</h3>
                        <GatsbyImage image={getImage(node.frontmatter.thumb)} alt={node.frontmatter.title} />
                    </article>
                ))
            }
        </div>
    )
}

export default Piezas