import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    heading,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <main className={container}>
            <header>
                <title>{pageTitle} | {data.site.siteMetadata.title} </title>
                <h1  className={siteTitle}>{data.site.siteMetadata.title}</h1>
                <nav>
                    <ul className={navLinks}>
                        <li  className={navLinkItem}><Link to="/"  className={navLinkText}>Inicio</Link></li>
                        <li  className={navLinkItem}><Link to="/juegos">Juegos</Link></li>
                    </ul>
                </nav>
            </header>
            <h2>{pageTitle}</h2>
            {children}
        </main>
    )
}

export default Layout