import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { Link } from "gatsby"

import AppContext from "../../context/AppContext"
import pdfFile from "../../../assets/defiant-white-paper.pdf"

import {
  PitchWrapper,
  ShowcaseCenter,
  ShowcaseWrapper,
  Heading,
  LogoWrapper,
  SocialWrapper,
  SocialHeader,
  MediaWrapper,
  Description,
  BtnWrapper,
  Logo,
  DefiantSVG,
  PaperBtn,
} from "../../../styles/showcase/ShowcaseStyles"

import { MaxWrapper, SectionWrapper } from "../../../styles/general/Wrappers"

function Showcase() {
  const appContext = useContext(AppContext)

  const { section, passed } = appContext

  return (
    <SectionWrapper id="showcase">
      <ShowcaseWrapper>
        <MaxWrapper>
          <ShowcaseCenter>
            <CSSTransition
              appear={section === "showcase" || passed >= 1}
              in={section === "showcase" || passed >= 1}
              timeout={800}
              classNames={"text"}
            >
              <PitchWrapper>
                <Heading>
                  Rewards, LP Acquisition, Fair Launch, we are Defiant a
                  community for an equal shot
                </Heading>
                <Description>
                  Using Refect functions, and LP functions that act as a
                  two-fold beneficial implementation for holders
                </Description>
                <BtnWrapper>
                  <PaperBtn href={pdfFile}>
                    <i className="fas fa-file" />
                    Whitepaper
                  </PaperBtn>
                  <Link to="#about">Learn More</Link>
                </BtnWrapper>
                <SocialWrapper>
                  <SocialHeader>Join Us On:</SocialHeader>
                  <MediaWrapper>
                    <Link to="nothingyet">
                      <i className="fas fa-envelope" />
                    </Link>
                    <a href="https://t.me/defianttoken">
                      <i className="fab fa-telegram-plane" />
                    </a>
                    <a href="https://twitter.com/DEFIANTtoken">
                      <i className="fab fa-twitter" />
                    </a>
                  </MediaWrapper>
                </SocialWrapper>
              </PitchWrapper>
            </CSSTransition>
            <CSSTransition
              appear={section === "showcase" || passed >= 1}
              in={section === "showcase" || passed >= 1}
              timeout={800}
              classNames={"svg"}
              unmountOnExit={true}
            >
              <LogoWrapper>
                <Logo>
                  <DefiantSVG />
                </Logo>
              </LogoWrapper>
            </CSSTransition>
          </ShowcaseCenter>
        </MaxWrapper>
      </ShowcaseWrapper>
    </SectionWrapper>
  )
}

export default Showcase
