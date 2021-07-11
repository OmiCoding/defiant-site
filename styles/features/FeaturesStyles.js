import styled from "@emotion/styled"
import { mq } from "../../utils"

export const FeaturesWrapper = styled.div`
  background-color: ${props => props.theme.landingBg};
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  overflow-x: auto;
  min-height: 100vh;
  max-height: min-content;
  opacity: 0;
  transform: translateY(300px);

  &.features-appear,
  &.features-enter {
    opacity: 0;
    transform: translateY(300px);
  }
  &.features-appear-active,
  &.features-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 800ms ease;
  }
  &.features-appear-done,
  &.features-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`

export const FeaturesHeader = styled.h2`
  font-family: ${props => props.theme.headingFont};
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  margin: 1rem 0;

  ${mq("tiny", "min")} [
    font-size: ${props => props.theme.header3};
  ]


  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header2};
  }

  ${mq("desktopS", "min")} {
    font-size: 2.5rem;
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: min-content;
  max-height: min-content;

  ${mq("tiny", "min")} {
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 1.5rem;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    width: 100%;
  }
`

export const FlexItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mq("tiny", "min")} {
    margin: 1.5rem 0;
  }

  ${mq("tablet", "min")} {
    margin: 5rem 1.5rem;
    width: 50%;
  }
`

export const ItemIcon = styled.i`
  color: ${props => props.theme.roadmapBg};

  ${mq("tiny", "min")} {
    font-size: 4rem;
  }
`

export const ItemHeader = styled.h3`
  font-size: ${props => props.theme.header3};
  margin: 0.75rem;
  text-align: center;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.header3};
  }
`

export const ItemDescription = styled.p`
  text-align: center;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.paragraph};
  }
`
