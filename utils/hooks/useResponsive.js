import { useContext, useEffect } from "react"

import AppContext from "../../src/context/AppContext"

function useResponsive() {
  const appContext = useContext(AppContext)

  const { device, dispatch } = appContext

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 320 && window.innerWidth < 1200) {
        if (device === "desktop") {
          return dispatch({
            type: "MOBILE",
          })
        }
      }

      if (window.innerWidth >= 1200) {
        if (device === "mobile") {
          return dispatch({
            type: "DESKTOP",
          })
        }
      }
    }

    if (device === null) {
      if (window.innerWidth >= 1200) {
        return dispatch({
          type: "DESKTOP",
        })
      } else {
        dispatch({
          type: "MOBILE",
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [device, dispatch])
}

export default useResponsive
