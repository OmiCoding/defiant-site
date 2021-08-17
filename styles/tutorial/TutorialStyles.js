import styled from "@emotion/styled"
import { mq } from "../../utils"

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: min-content;
  background-color: ${props => props.theme.contactBg};
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: min-content;
  max-height: min-content;

  ${mq("tiny", "min")} {
    flex-direction: column;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
  }
`

export const FlexItem = styled.div`
  ${mq("tiny", "min")} {
    width: 100%;
    height: min-content;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
    height: 100%;
    min-height: 100vh;
    max-height: min-content;
  }
`

export const TextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${props => props.theme.textColorInv};

  ${mq("tiny", "min")} {
    padding: 0 1rem;
  }

  ${mq("desktopS", "min")} {
    height: 100%;
    min-height: 100vh;
    max-height: min-content;
    padding: 0;
  }
`

export const Heading = styled.h2`
  font-family: ${props => props.theme.headingFont};
  text-align: center;

  padding: 2rem 0;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.header3};
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header2};
  }
`

export const Description = styled.p`
  text-align: center;

  padding-bottom: 2rem;

  ${mq("small", "min")} {
    font-size: ${props => props.theme.header5};
    width: 80%;
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header4};
    width: 60%;
  }
`

export const Link = styled.a`
  display: inline-block;
  font-size: ${props => props.theme.header5};
  padding: 1rem 0;
  color: ${props => props.theme.textColorInv};

  i {
    margin-right: 1rem;
  }
`

export const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  ${mq("tiny", "min")} {
    padding: 2rem 0;
  }

  ${mq("desktopS", "min")} {
    height: 100%;
    min-height: 100vh;
    max-height: min-content;
    padding: 0;
  }
`

export const VideoDimensions = styled.div`
  position: relative;

  ${mq("tiny", "min")} {
    width: 320px;
    height: 568px;
  }

  ${mq("tablet", "min")} {
    width: 407px;
    height: 914px;
  }

  ${mq("desktopS", "min")} {
    width: 380px;
    height: 853px;
  }
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
`
