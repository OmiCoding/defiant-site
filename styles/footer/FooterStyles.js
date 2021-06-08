import styled from "@emotion/styled"
import { mq } from "../../utils"

export const Footer = styled.footer`
  width: 100%;
  padding: 1.2rem;
  background-color: ${props => props.theme.contactBg};
`

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const FooterText = styled.p`
  width: 100%;
  font-size: ${props => props.theme.paragraph};
  color: ${props => props.theme.textColorInv};
  text-align: center;

  ${mq("tiny", "min")} {
    font-size: ${props => props.theme.copyrightText};
  }

  ${mq("tablet", "min")} {
    font-size: ${props => props.theme.paragraph};
  }
`
