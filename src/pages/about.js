import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return ( 
        <Layout pagetitle="About Page">
            <h1>Tablero Pequeño con Cajonera.</h1>
            <p>Tablero realizado con madera de pino, pintado y laqueado.</p>
            <p>En combinación de colores Caoba y Cedro.</p>
   
        </Layout>        
    )
}

export default AboutPage