import { useEffect, useContext } from "react"
import AppContext from "../../src/context/AppContext"

function useAppear() {
  const appContext = useContext(AppContext)

  const { section, dispatch, passed } = appContext

  return useEffect(() => {
    let yPos = document.documentElement.style.getPropertyValue("--scroll-y")

    if (!yPos) {
      document.documentElement.style.setProperty("--scroll-y", window.scrollY)

      yPos = document.documentElement.style.getPropertyValue("--scroll-y")
    }

    if (yPos) {
      if (parseInt(yPos) === 0) {
        let elemPos = document.body.querySelector("section#showcase")
        if (section !== elemPos.id) {
          dispatch({
            type: "ACTIVE_SECTION",
            data: "showcase",
          })
        }
      } else {
        let elemPos = document.body.querySelectorAll(
          "section#showcase, section#about, section#features, section#video, section#contact"
        )

        for (let i = 0; i < elemPos.length; i++) {
          let scrollPos = parseInt(yPos)
          if (
            i !== elemPos.length - 1 &&
            scrollPos >= elemPos[i].offsetTop - 500 &&
            scrollPos < elemPos[i].nextSibling.offsetTop
          ) {
            if (section !== elemPos[i].id) {
              dispatch({
                type: "ACTIVE_SECTION",
                data: elemPos[i].id,
              })
            }
          } else if (
            i === elemPos.length - 1 &&
            scrollPos >= elemPos[i].offsetTop - 500
          ) {
            if (section !== elemPos[i].id) {
              dispatch({
                type: "ACTIVE_SECTION",
                data: elemPos[i].id,
              })
            }
          }
        }
      }

      window.addEventListener("scroll", scrollListener)
    }

    function scrollListener() {
      if (yPos) {
        let scrollPos = window.scrollY
        let elemPos = document.body.querySelectorAll(
          "section#showcase, section#about, section#features, section#video, section#contact"
        )

        if (passed === 1) {
          if (
            scrollPos >= elemPos[0].offsetTop - 500 &&
            scrollPos < elemPos[0].nextSibling.offsetTop
          ) {
            if (section !== elemPos[0].id) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "showcase",
              })
            } else if (passed === 1) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "showcase",
              })
            }
          }
        } else if (passed === 2) {
          if (
            scrollPos >= elemPos[1].offsetTop - 500 &&
            scrollPos < elemPos[1].nextSibling.offsetTop
          ) {
            if (section !== elemPos[1].id) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "about",
              })
            }
          }
        } else if (passed === 3) {
          if (
            scrollPos >= elemPos[2].offsetTop - 500 &&
            scrollPos < elemPos[2].nextSibling.offsetTop
          ) {
            if (section !== elemPos[2].id) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "features",
              })
            }
          }
        } else if (passed === 4) {
          if (
            scrollPos >= elemPos[3].offsetTop - 500 &&
            scrollPos < elemPos[3].nextSibling.offsetTop
          ) {
            if (section !== elemPos[3].id) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "video",
              })
            }
          }
        } else if (passed === 5) {
          if (scrollPos >= elemPos[4].offsetTop - 500) {
            if (section !== elemPos[4].id) {
              return dispatch({
                type: "ACTIVE_SECTION",
                data: "contact",
              })
            }
          }
        }
      }
    }

    return () => {
      if (document.documentElement.style.getPropertyValue("--scroll-y")) {
        document.documentElement.style.removeProperty("--scroll-y")
      }

      window.removeEventListener("scroll", scrollListener)
    }
  }, [section, dispatch, passed])
}

export default useAppear
