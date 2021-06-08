import React from "react"
import { Link } from "gatsby"
import {
  ContactDescription,
  ContactDivider,
  ContactHeader,
  ContactSection,
  ContactWrapper,
  MediaDivider,
  MediaHeader,
  MediaWrapper,
} from "../../../styles/contact/ContactStyles"

function ContactContainer() {
  return (
    <ContactSection id="social">
      <ContactWrapper>
        <ContactHeader>Social Media</ContactHeader>
        <ContactDescription>
          You can contact us on these platforms and be updated on what we are
          doing, or socialize with the community. Together as DeFiAnts we are
          strong!
        </ContactDescription>
        <ContactDivider />
        <MediaWrapper>
          <MediaDivider>
            <Link to="mailto:someemail@gmail.com">
              <i className="fas fa-envelope" />
            </Link>
            <MediaHeader>Mail</MediaHeader>
          </MediaDivider>
          <MediaDivider>
            <Link to="telegramlocation">
              <i className="fab fa-telegram-plane" />
            </Link>
            <MediaHeader>Telegram</MediaHeader>
          </MediaDivider>
          <MediaDivider>
            <Link to="twitterlocation">
              <i className="fab fa-twitter" />
            </Link>
            <MediaHeader>Twitter</MediaHeader>
          </MediaDivider>
        </MediaWrapper>
      </ContactWrapper>
    </ContactSection>
  )
}

export default ContactContainer