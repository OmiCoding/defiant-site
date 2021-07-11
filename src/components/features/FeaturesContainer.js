import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import {
  FeaturesWrapper,
  FeaturesHeader,
  FlexWrapper,
  FlexItem,
  ItemIcon,
  ItemHeader,
  ItemDescription,
} from "../../../styles/features/FeaturesStyles"
import { MaxWrapper, SectionWrapper } from "../../../styles/general/Wrappers"

import AppContext from "../../context/AppContext"

function FeaturesContainer() {
  const appContext = useContext(AppContext)

  const { section, passed } = appContext

  return (
    <SectionWrapper id="features">
      <CSSTransition
        appear={section === "features" || passed >= 3}
        in={section === "features" || passed >= 3}
        timeout={800}
        classNames={"features"}
      >
        <FeaturesWrapper>
          <MaxWrapper>
            <FeaturesHeader>Features</FeaturesHeader>
            <FlexWrapper>
              <FlexItem>
                <ItemIcon className="far fa-money-bill-alt" />
                <ItemHeader>Holder's Fee</ItemHeader>
                <ItemDescription>
                  5% fee auto distributed to all holders
                </ItemDescription>
              </FlexItem>
              <FlexItem>
                <ItemIcon className="far fa-times-circle" />
                <ItemHeader>No Dev Wallet</ItemHeader>
                <ItemDescription>
                  No pre wallets are made for the team
                </ItemDescription>
              </FlexItem>
            </FlexWrapper>
            <FlexWrapper>
              <FlexItem>
                <ItemIcon className="far fa-handshake" />
                <ItemHeader>Fair Launch</ItemHeader>
                <ItemDescription>An equal shot to everyone</ItemDescription>
              </FlexItem>
              <FlexItem>
                <ItemIcon className="fas fa-chart-pie" />
                <ItemHeader>50 / 50 Split</ItemHeader>
                <ItemDescription>
                  5% fee is split in half which is sold by the contract into
                  BNB, while the other half is added as a liquidity pair into
                  PancakeSwap
                </ItemDescription>
              </FlexItem>
            </FlexWrapper>
          </MaxWrapper>
        </FeaturesWrapper>
      </CSSTransition>
    </SectionWrapper>
  )
}

export default FeaturesContainer
