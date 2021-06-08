import React, { useContext } from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"

import AppContext from "../../context/AppContext"
import AsideContainer from "./AsideContainer"
// import AsideNav from "./AsideNav"

import { Aside, AsideList, ListItem } from "../../../styles/aside/AsideStyles"

function AsideMenu() {
  const appContext = useContext(AppContext)

  const { aside, asideNav } = appContext

  function handleClick(value) {
    return asideNav(value)
  }

  return (
    <AsideContainer>
      <CSSTransition
        in={aside}
        appear={aside}
        timeout={600}
        classNames={"menu"}
      >
        <Aside>
          <AsideList>
            <ListItem>
              <Link to="#home" onClick={() => handleClick("#showcase")}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#about" onClick={() => handleClick("#about")}>
                About
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#features" onClick={() => handleClick("#features")}>
                Features
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#road" onClick={() => handleClick("#road")}>
                Roadmap
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#faq" onClick={() => handleClick("#faq")}>
                FAQ
              </Link>
            </ListItem>
            <ListItem>
              <Link to="#social" onClick={() => handleClick("#social")}>
                Social
              </Link>
            </ListItem>
          </AsideList>
        </Aside>
      </CSSTransition>
    </AsideContainer>
  )
}

export default AsideMenu
