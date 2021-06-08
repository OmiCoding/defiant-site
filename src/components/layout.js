/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"

import { defaultTheme } from "../../utils"

import NavContainer from "./nav/NavContainer"

const Layout = ({ children }) => {
  const { title, description } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          body {
            position: relative;
            width: 100%;
            font-family: ${defaultTheme.primaryFont};
            color: ${defaultTheme.textColor};
            overflow-x: hidden;
          }

          a {
            text-decoration: none;
            cursor: pointer;
          }

          button {
            border: none;
            background-color: transparent;
          }

          li {
            list-style: none;
          }
        `}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={`${description}`} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Questrial&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        />
      </Helmet>
      <NavContainer />
      <>{children}</>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
