import React from "react"

import VideoContainer from "./VideoContainer"

import { SectionWrapper, MaxWrapper } from "../../../styles/general/Wrappers"
import {
  ContentWrapper,
  FlexWrapper,
  FlexItem,
  TextWrapper,
  Heading,
  Description,
  Link,
} from "../../../styles/tutorial/TutorialStyles"

function TutorialContainer() {
  return (
    <SectionWrapper id="video">
      <ContentWrapper>
        <MaxWrapper>
          <FlexWrapper>
            <FlexItem>
              <TextWrapper>
                <Heading>How To Purchase Defiant</Heading>
                <Description>
                  The following video will guide you through the process in
                  purchasing Defiant tokens.
                </Description>
                <Description>
                  Glad to have you join defiANT! To the Moon!
                </Description>

                <Description>
                  If you need any help, please contact us through telegram, and
                  we'll help you as soon as we can.
                </Description>
                <Link href="https://t.me/defianttoken">
                  <i className="far fa-hand-point-right" />
                  https://t.me/defianttoken
                </Link>
              </TextWrapper>
            </FlexItem>
            <FlexItem>
              <VideoContainer />
            </FlexItem>
          </FlexWrapper>
        </MaxWrapper>
      </ContentWrapper>
    </SectionWrapper>
  )
}

export default TutorialContainer
