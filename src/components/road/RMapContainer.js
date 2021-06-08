import React from "react"
import { MaxWrapper } from "../../../styles/general/Wrappers"
import { RMapSection, RMapWrapper } from "../../../styles/road/RMapStyles"

function RMapContainer() {
  return (
    <RMapSection id="road">
      <RMapWrapper>
        <MaxWrapper></MaxWrapper>
      </RMapWrapper>
    </RMapSection>
  )
}

export default RMapContainer
