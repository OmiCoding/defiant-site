import React from "react"
import { ThemeProvider } from "@emotion/react"
import { defaultTheme } from "./utils"

import AppProvider from "./src/context/AppProvider"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>{element}</AppProvider>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
