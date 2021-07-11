import styled from "@emotion/styled"
import { mq } from "../../utils"

import MascotSVG from "../../assets/mascot-final-opti.svg"

export const AboutWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.contactBg};
  color: ${props => props.theme.textColorInv};
  overflow-x: hidden;
  min-height: 100vh;
  max-height: min-content;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  max-height: min-content;

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

export const SectionTitle = styled.h2`
  justify-self: flex-start;
  font-family: ${props => props.headingFont};
  font-size: 2.3rem;
  text-align: center;
  width: 100%;
`

export const Header = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.header3};
  margin: 1.2rem 0;

  ${mq("desktopS", "min")} {
    text-align: center;
    width: 100%;
  }
`

export const MiniHeader = styled.h4`
  width: 100%;
  font-family: ${props => props.theme.headerFont};
  margin: 1rem 0;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.header5};
  }

  ${mq("desktop", "min")} {
    font-size: ${props => props.theme.header2};
  }
`

export const TextContent = styled.p`
  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.paragraph};
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header4};
  }

  ${mq("desktopS", "min")} {
    width: 100%;
  }
`

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: scaleX(0);
  transform-origin: center;

  &.divider-appear,
  &.divider-enter {
    transform: scaleX(0);
  }
  &.divider-appear-active,
  &.divider-enter-active {
    transform: scaleX(1);
    transition: all 1200ms ease;
  }
  &.divider-appear-done,
  &.divider-enter-done {
    transform: scaleX(1);
  }
`

export const TitleDivider = styled.div`
  margin: 2rem 0;

  width: 20%;
  height: 3px;
  background-color: #ffffff;
`

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`

export const Circles = styled.div`
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 0 1.5rem;
`

export const SVGDivider = styled.div`
  position: relative;

  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 3rem 0;
    margin-bottom: 0.5rem;
  }

  ${mq("tablet", "min")} {
    padding: 4rem 0;
    margin-bottom: 1.5rem;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
    min-height: 100vh;
    padding: 150px 0;
    margin-bottom: 0;
  }
`

export const SVGWrapper = styled.div`
  opacity: 0;

  ${mq("tiny", "min")} {
    width: 290px;
    height: 254px;
  }

  ${mq("tablet", "min")} {
    width: 600px;
    height: 435px;
  }

  ${mq("desktopS", "min")} {
    position: absolute;
    top: 25%;
    left: -50%;
    bottom: 0;
    right: 0;
    width: 800px;
    height: 580px;
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

export const Mascot = styled(MascotSVG)`
  width: 100%;
  height: 100%;
`
