import styled from "@emotion/styled"
import { mq } from "../../utils"

export const RMapSection = styled.section`
  width: 100%;
  background-color: ${props => props.theme.landingBg};

  ${mq("tiny", "min")} {
    min-height: 568px;
    height: 100vh;
  }
`

export const RMapWrapper = styled.div`
  width: 100%;
  height: 100%;
`
