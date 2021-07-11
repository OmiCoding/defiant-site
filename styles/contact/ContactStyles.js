import styled from "@emotion/styled"
import { mq } from "../../utils"
import ChatAntsSVG from "../../assets/chat-ants-final-opti.svg"

export const ContactWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.landingBg};
  min-height: 100vh;
  max-height: min-content;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  max-content: min-content;

  ${mq("tiny", "min")} {
    flex-direction: column;
    padding: 3rem 0.5rem;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
    height: 100%;
    padding: 0;
  }
`

export const TextDivider = styled.div`
  opacity: 0;
  transform: translateX(-200px);
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }

  ${mq("tablet", "min")} {
    padding: 0 3rem;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
    min-height: 100vh;
    padding: 150px 0;
  }

  &.text-appear,
  &.text-enter {
    opacity: 0;
    transform: translateX(-200px);
  }
  &.text-appear-active,
  &.text-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 800ms ease;
  }
  &.text-appear-done,
  &.text-enter-done {
    opacity: 1;
    transform: translateX(0);
  }
`

export const ContactHeader = styled.h2`
  font-size: ${props => props.theme.header2};
  font-family: ${props => props.theme.headingFont};
  color: ${props => props.theme.roadmapBg};
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
`

export const ContactDescription = styled.p`
  text-align: center;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 70%;
  }

  ${mq("desktopS", "min")} {
    width: 100%;
    font-size: ${props => props.theme.header3};
  }
`

export const ContactDivider = styled.div`
  height: 2px;
  background-color: ${props => props.theme.roadmapBg};

  ${mq("tiny", "min")} {
    width: 90%;
    margin: 1.5rem auto;
  }

  ${mq("tablet", "min")} {
    width: 20%;
  }

  ${mq("desktopS", "min")} {
    margin: 1.5rem 0;
    width: 50%;
  }
`

export const MediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq("tiny", "min")} {
    width: 80%;
    margin: 1.5rem auto;
  }

  ${mq("desktopS", "min")} {
    margin-top: 3rem;
    width: 100%;
  }
`

export const MediaDivider = styled.div`
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: calc(100% / 3);
    height: 100px;
    a {
      display: inline-block;
      color: ${props => props.theme.roadmapBg};
      i {
        font-size: 2.5rem;
      }
    }
  }

  ${mq("tablet", "min")} {
    a {
      i {
        font-size: 4rem;
      }
    }
  }
`

export const MediaHeader = styled.h4`
  color: ${props => props.theme.roadmapBg};

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.helperText};
    margin-top: 1rem;
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header4};
  }
`

export const SVGDivider = styled.div`
  position: relative;
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 3rem 0;
    margin
  }

  ${mq("desktopS", "min")} {
    width: 50%;
    min-height: 100vh;
    padding: 150px;
  }
`

export const SVGWrapper = styled.div`
  opacity: 0;
  transform: translateX(-200px);

  ${mq("tiny", "min")} {
    width: 284px;
    height: 336px;
  }

  ${mq("tablet", "min")} {
    width: 527px;
    height: 624px;
  }

  ${mq("desktopS", "min")} {
    position: absolute;
    top: 10%;
    left: -25%;
    width: 640px;
    height: 768px;
  }

  &.svg-appear,
  &.svg-enter {
    opacity: 0;
    transform: translateX(-100px);
  }

  &.svg-appear-active,
  &.svg-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 800ms ease;
  }

  &.svg-appear-done,
  &.svg-enter-done {
    opacity: 1;
    transform: translateX(0);
  }
`

export const ChatAnts = styled(ChatAntsSVG)`
  width: 100%;
  height: 100%;
`
