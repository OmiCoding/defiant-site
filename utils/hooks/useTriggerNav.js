import { useCallback, useContext, useEffect } from "react"

import AppContext from "../../src/context/AppContext"

function useTriggerNav() {
  const appContext = useContext(AppContext)

  const { actvNav, trigNavFunc } = appContext

  const trigger = useCallback(() => {
    return trigNavFunc()
  }, [trigNavFunc])

  useEffect(() => {
    let y_Pos = document.documentElement.style.getPropertyValue("--scroll-y")

    if (!actvNav) {
      if (parseInt(y_Pos) >= 200) {
        return trigger()
      }
    }

    if (actvNav) {
      if (parseInt(y_Pos) <= 200) {
        return trigger(true)
      }
    }

    function scrollListener() {
      let y_Pos = document.documentElement.style.getPropertyValue("--scroll-y")
      if (!actvNav) {
        if (parseInt(y_Pos) >= 200) {
          return trigger()
        }
      }

      if (actvNav) {
        if (parseInt(y_Pos) <= 200) {
          return trigger(true)
        }
      }
    }

    window.addEventListener("scroll", scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [actvNav, trigger])
}

export default useTriggerNav
