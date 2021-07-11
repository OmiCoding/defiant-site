import React, { useReducer } from "react"
import AppContext from "./AppContext"
import appReducer from "./appReducer"
import { TRIGGER_NAV, TRIGGER_ASIDE, ASIDE_NAV } from "./types"

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    actvNav: false,
    aside: false,
    device: null,
    aNav: null,
    section: "showcase",
    passed: 1,
  })

  function trigNavFunc(data) {
    return dispatch({
      type: TRIGGER_NAV,
      data: data,
    })
  }

  function asideMenu() {
    return dispatch({
      type: TRIGGER_ASIDE,
    })
  }

  function asideNav(data) {
    return dispatch({
      type: ASIDE_NAV,
      data: data,
    })
  }

  return (
    <AppContext.Provider
      value={{
        actvNav: state.actvNav,
        aside: state.aside,
        device: state.device,
        aNav: state.aNav,
        section: state.section,
        passed: state.passed,
        trigNavFunc: trigNavFunc,
        asideMenu: asideMenu,
        asideNav: asideNav,
        dispatch: dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
