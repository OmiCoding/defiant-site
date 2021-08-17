import React, { useContext } from "react"

import { CSSTransition } from "react-transition-group"

import useYPos from "../../utils/hooks/useYPos"
import useTriggerNav from "../../utils/hooks/useTriggerNav"
import Showcase from "../components/showcase/Showcase"

import About from "../components/about/AboutContainer"
import Features from "../components/features/FeaturesContainer"
import { MainWrapper } from "../../styles/general/Wrappers"
import useResponsive from "../../utils/hooks/useResponsive"

import AppContext from "../context/AppContext"
import AsideMenu from "../components/aside/AsideMenu"
import Tutorial from "../components/tutorial/TutorialContainer"
import Contact from "../components/contact/ContactContainer"
import Footer from "../components/footer/FooterContainer"
import useAppear from "../../utils/hooks/useAppear"

const IndexPage = () => {
  const appContext = useContext(AppContext)

  const { aside } = appContext

  useResponsive()
  useYPos()
  useTriggerNav()
  useAppear()

  return (
    <>
      <MainWrapper>
        <Showcase />
        <About />
        <Features />
        <Tutorial />
        <Contact />
        <Footer />
      </MainWrapper>
      <CSSTransition
        in={aside}
        appear={aside}
        unmountOnExit
        timeout={400}
        classNames={"overlay"}
      >
        <AsideMenu />
      </CSSTransition>
    </>
  )
}

export default IndexPage
