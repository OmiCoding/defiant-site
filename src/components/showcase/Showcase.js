import React from "react"
import { Link } from "gatsby"

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
  PaperBtn,
} from "../../../styles/showcase/ShowcaseStyles"
import { MaxWrapper } from "../../../styles/general/Wrappers"
// import { PaperBtn } from "../../../styles/general/Buttons"

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
                <PaperBtn href="pdf file path">
                  <i className="fas fa-file" />
                  Whitepaper
                </PaperBtn>
                <Link to="#about">Learn More</Link>
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
