import styled from "@emotion/styled"
import { mq } from "../../utils"

export const MaxWrapper = styled.div`
  min-height: 100vh;
  max-height: min-content;

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

export const SectionWrapper = styled.section`
  ${mq("tiny", "min")} {
    width: 100%;
    min-height: min-content;
  }

  ${mq("desktopS", "min")} {
    padding: 0;
  }
`
