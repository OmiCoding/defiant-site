import styled from "@emotion/styled"
import { mq } from "../../utils"

export const MaxWrapper = styled.div`
  ${mq("desktopS", "min")} {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }
`

export const MainWrapper = styled.main`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  z-index: 0;
`
