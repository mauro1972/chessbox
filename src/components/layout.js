import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li  className={navLinkItem}><Link to="/"  className={navLinkText}>Inicio</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                </ul>
            </nav>
            <h1  className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout