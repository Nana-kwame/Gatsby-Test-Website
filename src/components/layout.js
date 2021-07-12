/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }

      allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
        edges {
          node {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>{children}</main>

      <Footer data={data}>
        Nana Kwame Acheampong. FrontEnd Engineer and UI Developer, working on ideas that make sense and is fun. Let's talk about how we can make a difference together
      </Footer>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
