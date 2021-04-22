import React from "react";
import {
  StyledFooterWrapper,
  StyledFooter,
  StyledEmail,
  StyledIcon,
  StyledIcons,
} from "../styles/footer.styles";
import Instagram from "../icons/instagram.svg";
import LinkedIn from "../icons/linkedin.svg";
import Github from "../icons/github.svg";

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooter>
        <div>
          👋🏼{" "}
          <StyledEmail href="mailto:hello@erikasmith.dev">
            hello@erikasmith.dev
          </StyledEmail>
        </div>
        <StyledIcons>
          <StyledIcon
            target="_blank"
            href="https://github.com/erikasmith-formidablelabs"
          >
            <Github />
          </StyledIcon>
          <StyledIcon
            target="_blank"
            href="https://www.linkedin.com/in/erikaannesmith/"
          >
            <LinkedIn />
          </StyledIcon>
          <StyledIcon
            target="_blank"
            href="https://www.instagram.com/erikasmith"
          >
            <Instagram />
          </StyledIcon>
        </StyledIcons>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
