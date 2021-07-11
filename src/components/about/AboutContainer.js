import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import {
  AboutWrapper,
  FlexWrapper,
  Header,
  MiniHeader,
  TextContent,
  SectionTitle,
  TextDivider,
  SVGDivider,
  SVGWrapper,
  Mascot,
  DividerWrapper,
  CircleWrapper,
  Circles,
  TitleDivider,
} from "../../../styles/about/AboutStyles"
import { MaxWrapper, SectionWrapper } from "../../../styles/general/Wrappers"

import AppContext from "../../context/AppContext"

function AboutContainer() {
  const appContext = useContext(AppContext)

  const { section, passed } = appContext

  return (
    <SectionWrapper id="about">
      <AboutWrapper>
        <MaxWrapper>
          <FlexWrapper>
            <SVGDivider>
              <CSSTransition
                appear={section === "about" || passed >= 2}
                in={section === "about" || passed >= 2}
                timeout={800}
                classNames={"svg"}
              >
                <SVGWrapper>
                  <Mascot />
                </SVGWrapper>
              </CSSTransition>
            </SVGDivider>
            <CSSTransition
              appear={section === "about" || passed >= 2}
              in={section === "about" || passed >= 2}
              timeout={800}
              classNames={"text"}
            >
              <TextDivider>
                <SectionTitle>ABOUT US</SectionTitle>
                <CSSTransition
                  appear={section === "about" || passed >= 2}
                  in={section === "about" || passed >= 2}
                  timeout={1200}
                  classNames={"divider"}
                >
                  <DividerWrapper>
                    <TitleDivider />
                  </DividerWrapper>
                </CSSTransition>
                <Header>Why We Started This Journey :</Header>
                <MiniHeader>Systemic Devaluation of Fiat Currencies</MiniHeader>
                <TextContent>
                  With governments and central banks printing &amp; pumping
                  trillions of dollars into the global economy. High inflation
                  and currency depreciation are an inevitable reality for the
                  years ahead. Central Banks have had a monopoly on monetary
                  liquidity for too long and each day more and more people are
                  losing faith in these archaic system.
                </TextContent>
                <MiniHeader>Too Many Pump &amp; Dumps</MiniHeader>
                <TextContent>
                  Yet, with almost 10 years of experience &amp; involvement in
                  Crypto projects, our team sees that the current DeFi coin
                  trends are dangerous. Too many coin developers are
                  opportunists setting up, pumping &amp; dumping one coin after
                  another, leaving retail investors with empty hopes and
                  significant financial losses. These types of opportunistic
                  get-rich-quick schemes are not sustainable and will not
                  survive the bear market known as the "Crypto Winter".
                </TextContent>
                <DividerWrapper>
                  <CircleWrapper>
                    <Circles />
                    <Circles />
                    <Circles />
                  </CircleWrapper>
                </DividerWrapper>
                <Header>What we wish to accomplish :</Header>
                <MiniHeader>DeFiAnt to stand the test of time.</MiniHeader>
                <TextContent>
                  We have structured DeFiAnt specifically as a Community Coin
                  and in honor of Satoshi Nakamoto all founder ownership has
                  been renounced. This allows for a level playing field, and
                  doesn't leave room for "Rug Pulls" and "Whale Dumps" which are
                  customary in "Pump &amp; Dump Coins".
                </TextContent>
                <MiniHeader>Collaborative Ants To The Rescue!</MiniHeader>
                <TextContent>
                  We all know that Ants are some of the hardest working
                  creatures on our planet. Thousands of them unite as a
                  collaborative force to achieve their mutual goals. We are
                  inspired by their selfless efforts and dedication to
                  accomplishing remarkable feats. The DeFiAnt community is here
                  to support each other through Crypto peaks and troths. The
                  DeFiAnt Tokinomics are set up to automatically reward all
                  holders and promoters.
                </TextContent>
                <MiniHeader>
                  We welcome you to join the DeFiAnt community by adding this
                  token to your diversified portfolio!
                </MiniHeader>
              </TextDivider>
            </CSSTransition>
          </FlexWrapper>
        </MaxWrapper>
      </AboutWrapper>
    </SectionWrapper>
  )
}

export default AboutContainer
