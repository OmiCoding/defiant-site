import styled from "@emotion/styled"
import { mq } from "../../utils"

import LogoSVG from "../../assets/ant-c-ant-opti.svg"

export const AboutSection = styled.section`
  width: 100%;
  background-color: ${props => props.theme.roadmapBg};

  ${mq("tiny", "min")} {
    min-height: 568px;
    min-height: 100vh;
  }
`

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.textColorInv};

  ${mq("tiny", "min")} {
    flex-direction: column;
    padding: 3rem 0.5rem;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
    min-height: 100vh;
    padding: 0;
  }
`

export const ContentDivider = styled.div`
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
    min-height: 100vh;
    padding: 150px 0;
  }
`

export const SectionTitle = styled.h2`
  justify-self: flex-start;
  font-family: ${props => props.theme.headingFont};
  font-size: 2.3rem;
  margin-bottom: 2rem;

  ${mq("tiny", "min")} {
    text-align: center;
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
  }
`

export const Header = styled.h3`
  font-family: ${props => props.theme.headingFont};
  font-size: ${props => props.theme.header3};

  margin: 1.2rem 0;

  ${mq("desktopS", "min")} {
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
  font-size: ${props => props.theme.paragraph};

  ${mq("desktopS", "min")} {
    width: 100%;
  }
`

export const LogoWrapper = styled.div`
  ${mq("tiny", "min")} {
    width: 300px;
    height: 300px;
  }

  ${mq("tablet", "min")} {
    width: 500px;
    height: 500px;
  }
`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.textColorInv};
`
