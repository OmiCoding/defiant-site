import { useEffect } from "react"

function useYPos() {
  useEffect(() => {
    function scrollListener() {
      let y_Pos = window.scrollY

      document.documentElement.style.setProperty("--scroll-y", `${y_Pos}`)
    }

    let y_Pos = window.scrollY

    document.documentElement.style.setProperty("--scroll-y", `${y_Pos}`)

    window.addEventListener("scroll", scrollListener)
    return () => {
      if (document.documentElement.style.getPropertyValue("--scroll-y")) {
        document.documentElement.style.removeProperty("--scroll-y")
      }

      window.removeEventListener("scroll", scrollListener)
    }
  }, [])
}

export default useYPos
