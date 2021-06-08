import styled from "@emotion/styled"
import LogoSVG from "../../assets/ant-c-opti.svg"
import { mq } from "../../utils"

export const ShowcaseSection = styled.section`
  background-color: ${props => props.theme.landingBg};
  margin-top: 80px;

  ${mq("tiny", "min")} {
    width: 100%;
    min-height: 568px;
    padding: 5rem 0;
  }

  ${mq("desktopS", "min")} {
    padding: 0;
    min-height: 100vh;
  }
`

export const ShowcaseWrapper = styled.div`
  width: 100%;
  ${mq("desktopS", "min")} {
    min-height: 100vh;
  }
`

export const ShowcaseCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${mq("tiny", "min")} {
    flex-direction: column-reverse;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
    min-height: 100vh;
  }
`

export const PitchWrapper = styled.div`
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    width: 40%;
    min-height: 100vh;
  }
`

export const Heading = styled.h1`
  font-family: ${props => props.theme.headingFont};
  margin-bottom: 0.75rem;
  text-align: left;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.header2};
    width: 90%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }

  ${mq("desktopS", "min")} {
    font-size: 2.3rem;
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

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${mq("desktopS", "min")} {
    width: 60%;
    min-height: 100vh;
  }
`

export const Logo = styled.div`
  ${mq("tiny", "min")} {
    width: 200px;
    height: 200px;
  }

  ${mq("tablet", "min")} {
    width: 500px;
    height: 500px;
  }

  ${mq("desktopS", "min")} {
    width: 600px;
    height: 600px;
    margin-bottom: 3rem;
    margin-left: 5rem;
  }
`

export const DefiantSVG = styled(LogoSVG)`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.roadmapBg};
`
