import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Piezas from '../../components/piezas'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { 
    gameCard,
    gameCardItem
} from './index.module.css'

const juegoPage = ({ data }) => {
    return (
        <Layout pageTitle="Juegos de Ajedrez.">
            <GatsbyImage image={getImage(data.file)} alt={data.file.name} />
            <h2>Tableros.</h2>
            <div className={gameCard} >
            
            {
                data.allMdx.nodes.map((node) => (
                    <article className={gameCardItem} key={node.id}>
                        <GatsbyImage image={getImage(node.frontmatter.thumb)} alt={node.frontmatter.title} />                        
                        <h3>
                            <Link to={`/juegos/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                            
                        </h3>
                        <Link to={`/juegos/${node.slug}`}>
                            Ver más...
                        </Link>
                     </article>
                ))
            }
            </div>
            <h2>Piezas.</h2>
            <p>Las piezas estan torneadas en madera de Palo blanco, con 
un contrapeso de plomo, para mayor estabilidad,
 y tela de paño en la base.</p>
            <Piezas pagetitle="Piezas.">
            </Piezas>
        </Layout>

    )
}

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {tipo: {eq: "juego"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          thumb {
            publicURL
            childImageSharp {
                gatsbyImageData(width: 200)
            }
          }
        }
        id
        slug
      }
    }
    file(name: {eq: "tableros-ajedrez"}) {
        childImageSharp {
          gatsbyImageData(width: 950)
        }
        publicURL
    }    
  }
`

export default juegoPage