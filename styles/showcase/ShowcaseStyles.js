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
    }
  }

  ${mq("tablet", "min")} {
    width: 60%;
    a:nth-of-type(2n) {
      padding: 1.2rem 1.5rem;
      font-size: ${props => props.theme.header5};
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
  margin-right: 1rem;
  border: 2px solid transparent;
  border-radius: 2px;
  cursor: pointer;

  i {
    display: inline-block;
    margin-right: 1.2rem;
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

// a:nth-of-type(2) {

// }

// export const AboutBtn = styled(PaperBtn)`
//   background-color: transparent;
//   border: 2px solid ${props => props.theme.roadmapBg};
//   color: ${props => props.theme.roadmapBg};

//   &:hover {
//     color: ${props => props.theme.textColorInv};
//     background-color: ${props => props.theme.roadmapBg};
//     transition: all 400ms ease;
//   }
// `

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
