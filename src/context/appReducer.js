import {
  TRIGGER_ASIDE,
  TRIGGER_NAV,
  ASIDE_NAV,
  ACTIVE_SECTION,
  DESKTOP,
  MOBILE,
} from "./types"

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

    case ACTIVE_SECTION:
      if (action.data === "showcase") {
        return {
          ...state,
          section: action.data,
          passed: state.passed + 1,
        }
      } else if (action.data === "about") {
        if (state.passed === 1) {
          return {
            ...state,
            passed: 2,
          }
        }
        if (state.passed < 2) {
          return {
            ...state,
            section: action.data,
            passed: state.passed + 1,
          }
        } else {
          return {
            ...state,
            section: action.data,
          }
        }
      } else if (action.data === "features") {
        if (state.passed === 1) {
          return {
            ...state,
            passed: 3,
          }
        }
        if (state.passed < 3) {
          return {
            ...state,
            section: action.data,
            passed: state.passed + 1,
          }
        } else {
          return {
            ...state,
            section: action.data,
          }
        }
      } else if (action.data === "video") {
        if (state.passed === 1) {
          return {
            ...state,
            passed: 4,
          }
        }
        if (state.passed < 4) {
          return {
            ...state,
            section: action.data,
            passed: state.passed + 1,
          }
        } else {
          return {
            ...state,
            section: action.data,
          }
        }
      } else if (action.data === "contact") {
        if (state.passed === 1) {
          return {
            ...state,
            passed: 5,
          }
        }
        if (state.passed < 5) {
          return {
            ...state,
            section: action.data,
            passed: state.passed + 1,
          }
        } else {
          return {
            ...state,
            section: action.data,
          }
        }
      } else {
        return {
          ...state,
          section: action.data,
        }
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
