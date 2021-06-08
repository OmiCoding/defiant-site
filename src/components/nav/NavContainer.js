import React, { useContext } from "react"
import { Link } from "gatsby"

import AppContext from "../../context/AppContext"

import {
  ContentWrapper,
  Header,
  LogoWrapper,
  NavWrapper,
  NavList,
  ListItem,
  NavMenu,
  HamburgerWrapper,
  HamburgerContent,
  Logo,
} from "../../../styles/nav/NavStyles"

import { MaxWrapper } from "../../../styles/general/Wrappers"

import { MenuBtn } from "../../../styles/general/Buttons"

function NavContainer() {
  const appContext = useContext(AppContext)

  const { aside, asideMenu } = appContext
  return (
    <Header>
      <MaxWrapper>
        <ContentWrapper>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavWrapper>
            <NavList>
              <ListItem>
                <Link to="#showcase">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="#about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="#features">Features</Link>
              </ListItem>
              <ListItem>
                <Link to="#road">Roadmap</Link>
              </ListItem>
              <ListItem>
                <Link to="#faq">FAQ</Link>
              </ListItem>
              <ListItem>
                <Link to="#social">Social</Link>
              </ListItem>
            </NavList>
            <NavMenu>
              <h2>Menu</h2>
              <HamburgerWrapper>
                <HamburgerContent
                  style={{
                    transform: aside === true ? `rotate(90deg)` : `rotate(0)`,
                  }}
                >
                  <i className="fas fa-bars" />
                </HamburgerContent>
                <MenuBtn type="button" onClick={() => asideMenu()} />
              </HamburgerWrapper>
            </NavMenu>
          </NavWrapper>
        </ContentWrapper>
      </MaxWrapper>
    </Header>
  )
}

export default NavContainer
