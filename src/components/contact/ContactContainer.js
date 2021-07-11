import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { Link } from "gatsby"
import {
  ContactDescription,
  ContactDivider,
  ContactHeader,
  ContactWrapper,
  FlexWrapper,
  TextDivider,
  SVGDivider,
  SVGWrapper,
  ChatAnts,
  MediaDivider,
  MediaHeader,
  MediaWrapper,
} from "../../../styles/contact/ContactStyles"

import { SectionWrapper, MaxWrapper } from "../../../styles/general/Wrappers"

import AppContext from "../../context/AppContext"

function ContactContainer() {
  const appContext = useContext(AppContext)

  const { section, passed } = appContext

  return (
    <SectionWrapper id="contact">
      <ContactWrapper>
        <MaxWrapper>
          <FlexWrapper>
            <SVGDivider>
              <CSSTransition
                appear={section === "contact" || passed >= 4}
                in={section === "contact" || passed >= 4}
                timeout={800}
                classNames={"svg"}
              >
                <SVGWrapper>
                  <ChatAnts />
                </SVGWrapper>
              </CSSTransition>
            </SVGDivider>

            <CSSTransition
              appear={section === "contact" || passed >= 4}
              in={section === "contact" || passed >= 4}
              timeout={800}
              classNames={"text"}
            >
              <TextDivider>
                <ContactHeader>Contact Us</ContactHeader>
                <ContactDescription>
                  You can contact us on these platforms and be updated on what
                  we are doing, or socialize with the community. Together as
                  DeFiAnts we are strong!
                </ContactDescription>
                <ContactDivider />
                <MediaWrapper>
                  <MediaDivider>
                    <Link to="nothingyet">
                      <i className="fas fa-envelope" />
                    </Link>
                    <MediaHeader>Mail</MediaHeader>
                  </MediaDivider>
                  <MediaDivider>
                    <a href="https://t.me/defianttoken">
                      <i className="fab fa-telegram-plane" />
                    </a>
                    <MediaHeader>Telegram</MediaHeader>
                  </MediaDivider>
                  <MediaDivider>
                    <a href="https://twitter.com/DEFIANTtoken">
                      <i className="fab fa-twitter" />
                    </a>
                    <MediaHeader>Twitter</MediaHeader>
                  </MediaDivider>
                </MediaWrapper>
              </TextDivider>
            </CSSTransition>
          </FlexWrapper>
        </MaxWrapper>
      </ContactWrapper>
    </SectionWrapper>
  )
}

export default ContactContainer
