import styled from "@emotion/styled"
import { mq } from "../../utils"

export const AsideOverlay = styled.div`
  position: absolute;
  left: 0;
  z-index: 0;
  height: 100%;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    display: none;
  }

  &.overlay-appear,
  &.overlay-enter {
    opacity: 0;
  }

  &.overlay-appear-active,
  &.overlay-enter-active {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &.overlay-appear-done,
  &.overlay-enter-done {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &.overlay-exit {
    opacity: 1;
  }

  &.overlay-exit-active {
    opacity: 0;
    transition: opacity 400ms ease;
  }
`

export const AsideWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Aside = styled.aside`
  min-height: 100%;
  background-color: ${props => props.theme.roadmapBg};
  margin-top: 80px;
  transform: translateX(-100%);
  opacity: 0;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 50%;
  }

  &.menu-appear,
  &.menu-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  &.menu-appear-active,
  &.menu-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 600ms ease;
  }

  &.menu-appear-done,
  &.menu-enter-done {
    opacity: 1;
    transform: translateX(0);
  }

  &.menu-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.menu-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 600ms ease;
  }
`

export const AsideList = styled.ul`
  width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 1rem 0;
  padding: 1rem 0;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-family: ${props => props.theme.headingFont};
    font-size: 1.2rem;
    color: ${props => props.theme.textColorInv};
    &:hover {
      background-color: #ed967e;
    }
  }
`
