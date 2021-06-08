import React from "react"
import { createPortal } from "react-dom"

import { AsideOverlay, AsideWrapper } from "../../../styles/aside/AsideStyles"

import useOverflow from "../../../utils/hooks/useOverflow"

function AsideContainer({ children }) {
  useOverflow()

  return typeof document === "undefined"
    ? null
    : createPortal(
        <AsideOverlay id="aside-overlay" key="2">
          <AsideWrapper>{children}</AsideWrapper>
        </AsideOverlay>,
        document.body
      )
}

export default AsideContainer
