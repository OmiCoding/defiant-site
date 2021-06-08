import React from "react"

import {
  PitchWrapper,
  ShowcaseCenter,
  ShowcaseSection,
  ShowcaseWrapper,
  Heading,
  LogoWrapper,
  Description,
  BtnWrapper,
  Logo,
  DefiantSVG,
} from "../../../styles/showcase/ShowcaseStyles"
import { MaxWrapper } from "../../../styles/general/Wrappers"
import { AboutBtn, PaperBtn } from "../../../styles/general/Buttons"

function Showcase() {
  return (
    <ShowcaseSection id="showcase">
      <MaxWrapper>
        <ShowcaseWrapper>
          <ShowcaseCenter>
            <PitchWrapper>
              <Heading>
                Opportunity found in a strong community based crypto
              </Heading>
              <Description>Coming Soon...</Description>
              <BtnWrapper>
                <PaperBtn>
                  <i className="fas fa-file" />
                  Whitepaper
                </PaperBtn>
                <AboutBtn>Learn More</AboutBtn>
              </BtnWrapper>
            </PitchWrapper>
            <LogoWrapper>
              <Logo>
                <DefiantSVG />
              </Logo>
            </LogoWrapper>
          </ShowcaseCenter>
        </ShowcaseWrapper>
      </MaxWrapper>
    </ShowcaseSection>
  )
}

export default Showcase
