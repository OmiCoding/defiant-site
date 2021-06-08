import styled from "@emotion/styled"
import { mq } from "../../utils"

export const ContactSection = styled.section`
  width: 100%;
  padding: 150px 0;
  background-color: ${props => props.theme.contactBg};
`

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  color: ${props => props.theme.textColorInv};

  ${mq("tiny", "min")} {
    padding: 0 0.5rem;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
  }
`

export const ContactHeader = styled.h2`
  font-size: ${props => props.theme.header2};
  font-family: ${props => props.theme.headingFont};

  margin-bottom: 1rem;

  ${mq("tiny", "min")} {
    text-align: center;
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    width: 100%;
  }
`

export const ContactDescription = styled.p`
  font-size: ${props => props.theme.header5};

  ${mq("tiny", "min")} {
    text-align: center;
  }

  ${mq("tablet", "min")} {
    width: 50%;
    margin: 0 auto;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    width: 100%;
    margin: 0;
  }
`

export const ContactDivider = styled.div`
  height: 2px;
  background-color: ${props => props.theme.textColorInv};

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
      color: ${props => props.theme.textColorInv};
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
  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.helperText};
    margin-top: 1rem;
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.header4};
  }
`
