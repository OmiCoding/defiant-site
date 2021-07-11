import styled from "@emotion/styled"
import { mq } from "../../utils"

import LogoSVG from "../../assets/ant-c-upper-opti.svg"

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.landingBg};
  z-index: 5;
`

export const HeaderWrapper = styled.div`
  ${mq("tiny", "min")} {
    width: 90%;
    margin: 0 auto;
  }

  ${mq("desktopS", "min")} {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: 100%;
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 80px;
`
export const NavList = styled.ul`
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.roadmapBg};
    transform: scaleX(0);
    transform-origin: left center;
  }

  &:hover {
    a {
      color: ${props => props.theme.roadmapBg};
      transition: all 400ms ease;
    }
  }

  &:hover::after {
    transform: scaleX(1);
    transition: all 400ms ease;
  }

  ${mq("tiny", "min")} {
    a {
      display: inline-block;
      font-size: 1rem;
      font-family: ${props => props.theme.headingFont};
      color: ${props => props.theme.textColor};
      height: 80px;
      line-height: 80px;
      flex: 1 1 auto;
    }
  }

  ${mq("desktopS", "min")} {
    a {
      min-wdith: 100px;
      padding: 0 1rem;
      font-size: 1.1rem;
    }
  }
`

export const NavMenu = styled.div`
  line-height: 80px;
  color: ${props => props.theme.roadmapBg};

  h2 {
    font-size: ${props => props.theme.header4};
  }

  ${mq("tiny", "min")} {
    display: flex;
  }

  ${mq("desktopS", "min")} {
    display: none;
  }
`

export const HamburgerWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  z-index: 0;
`

export const HamburgerContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: all 200ms ease;

  i {
    font-size: 1.2rem;
    color: ${props => props.theme.roadmapBg};
  }
`
