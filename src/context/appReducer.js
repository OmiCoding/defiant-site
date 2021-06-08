import { TRIGGER_ASIDE, TRIGGER_NAV, ASIDE_NAV, DESKTOP, MOBILE } from "./types"

function appReducer(state, action) {
  switch (action.type) {
    case TRIGGER_NAV:
      if (action.data) {
        return {
          ...state,
          actvNav: false,
        }
      }

      return {
        ...state,
        actvNav: !state.actvNav,
      }

    case TRIGGER_ASIDE:
      return {
        ...state,
        aside: !state.aside,
      }

    case ASIDE_NAV:
      return {
        ...state,
        aside: false,
        aNav: action.data,
      }

    case DESKTOP:
      return {
        ...state,
        device: "desktop",
        aside: false,
      }

    case MOBILE:
      return {
        ...state,
        device: "mobile",
      }

    default:
      return {
        ...state,
      }
  }
}

export default appReducer
