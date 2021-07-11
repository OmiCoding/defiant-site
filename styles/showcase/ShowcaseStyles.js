import styled from "@emotion/styled"
import ShowcaseSVG from "../../assets/Ant-Showcase-final-opti.svg"
import { mq } from "../../utils"

export const ShowcaseWrapper = styled.div`
  background-color: ${props => props.theme.landingBg};
  width: 100%;
  height: 100%;
  margin-top: 80px;
  padding: 2rem 0;
  overflow-x: auto;
  min-height: 100vh;
  max-height: min-content;
`

export const ShowcaseCenter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: min-content;

  ${mq("tiny", "min")} {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
    justify-content: center;
  }
`

export const PitchWrapper = styled.div`
  opacity: 0;
  transform: translateX(-200px);

  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    padding: 4rem 0;
  }

  ${mq("desktopS", "min")} {
    justify-content: center;
    width: 40%;
    min-height: 100vh;
    padding: 0;
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

export const Heading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  margin-bottom: 0.75rem;
  text-align: left;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.header3};
    width: 90%;
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header2};
    width: 60%;
  }

  ${mq("desktopS", "min")} {
    font-size: ${props => props.theme.header2};
    width: 100%;
  }
`

export const Description = styled.p`
  font-family: ${props => props.theme.primaryFont};
  font-size: ${props => props.theme.paragraph};
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;

  ${mq("tiny", "min")} {
    width: 90%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }

  ${mq("desktopS", "min")} {
    width: 100%;
  }
`

export const BtnWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;

  a:nth-of-type(2n) {
    display: inline-block;
    background-color: transparent;
    border: 2px solid ${props => props.theme.roadmapBg};
    color: ${props => props.theme.roadmapBg};
    font-family: ${props => props.theme.headingFont};
    font-size: 1rem;
    padding: 1rem 1.2rem;
    margin-right: 1rem;
    line-height: 1.3;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.textColorInv};
      background-color: ${props => props.theme.roadmapBg};
      transition: all 400ms ease;
    }
  }

  ${mq("tiny", "min")} {
    width: 90%;
    a:nth-of-type(2n) {
      padding: 1rem 1.2rem;
      font-size: ${props => props.theme.helperText};
      border-radius: 35px;
    }
  }

  ${mq("tablet", "min")} {
    width: 60%;
    a:nth-of-type(2n) {
      padding: 1.2rem 1.5rem;
      font-size: ${props => props.theme.header5};
      border-radius: 35px;
    }
  }

  ${mq("desktopS", "min")} {
    width: 100%;
  }
`

export const PaperBtn = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.roadmapBg};
  color: ${props => props.theme.textColorInv};
  font-family: ${props => props.theme.headingFont};
  font-size: 1rem;
  padding: 1rem 1.2rem;
  margin-right: 2rem;
  border: 2px solid transparent;
  border-radius: 35px;
  cursor: pointer;

  i {
    display: inline-block;
    margin-right: 0.75rem;
  }

  &:hover {
    color: ${props => props.theme.roadmapBg};
    background-color: transparent;
    border-color: ${props => props.theme.roadmapBg};
    transition: all 400ms ease;
  }

  ${mq("tiny", "min")} {
    padding: 1rem 1.2rem;
    font-size: ${props => props.theme.helperText};
  }
  ${mq("tablet", "min")} {
    padding: 1.2rem 1.5rem;
    font-size: ${props => props.theme.header5};
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  color: ${props => props.theme.roadmapBg};

  ${mq("tiny", "min")} {
    width: 90%;
    a {
      display: inline-block;
      font-size: ${props => props.theme.header4};
      margin: 0 0.75rem;
      color: ${props => props.theme.roadmapBg};
      &:hover {
        color: ${props => props.theme.textColor};
      }
    }
  }

  ${mq("tablet", "min")} {
    width: 60%;
    a {
      font-size: ${props => props.theme.header3};
    }
  }

  ${mq("desktopS", "min")} {
    width: 100%;
  }
`

export const SocialHeader = styled.h3`
  font-family: ${props => props.theme.headingFont};

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.paragraph};
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header3};
  }
`

export const MediaWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
`

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-100px);

  ${mq("desktopS", "min")} {
    width: 60%;
    min-height: 100vh;
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

export const Logo = styled.div`
  ${mq("tiny", "min")} {
    width: 310px;
    height: 277px;
  }

  ${mq("tablet", "min")} {
    width: 481px;
    height: 415px;
  }

  ${mq("desktopS", "min")} {
    width: 641px;
    height: 834px;
  }

  ${mq("desktopM", "min")} {
    position: absolute;
    top: 0;
    right: -50%;
    width: 961px;
    height: 829px;
    margin-bottom: 3rem;
    margin-left: 5rem;
    overflow-x: overflow;
  }
`

export const DefiantSVG = styled(ShowcaseSVG)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.roadmapBg};
`
