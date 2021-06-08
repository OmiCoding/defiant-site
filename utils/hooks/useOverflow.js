import { useContext, useEffect } from "react"

import AppContext from "../../src/context/AppContext"

function useOverFlow() {
  const appContext = useContext(AppContext)

  const { aNav } = appContext

  useEffect(() => {
    let y_Pos = document.documentElement.style.getPropertyValue("--scroll-y")

    if (!y_Pos) {
      document.documentElement.style.setProperty("--scroll-y", window.scrollY)

      y_Pos = document.documentElement.style.getPropertyValue("--scroll-y")
    }

    let overlayElem = document.querySelector("#aside-overlay")

    document.body.style.height = "100%"
    document.body.style.position = "fixed"
    document.body.style.overflow = "hidden"

    document.body.style.top = `-${y_Pos}px`
    overlayElem.style.top = `${y_Pos}px`

    return () => {
      document.body.style.height = "auto"
      document.body.style.position = "relative"
      document.body.style.overflow = "unset"
      document.body.style.top = ""
      overlayElem.style.top = ""

      if (document.documentElement.style.getPropertyValue("--scroll-y")) {
        document.documentElement.style.removeProperty("--scroll-y")
      }

      if (aNav) {
        let elem = document.querySelector(aNav)
        window.scrollTo(0, elem.offsetTop)
      } else {
        window.scrollTo(0, y_Pos)
      }
    }
  }, [aNav])
}

export default useOverFlow
