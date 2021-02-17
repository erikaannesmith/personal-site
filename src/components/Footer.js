import React from "react";
import { StyledFooter, StyledEmail } from "../styles/footer.styles";
import Instagram from "../icons/instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        👋🏼{" "}
        <StyledEmail href="mailto:hello@erikasmith.dev">
          hello@erikasmith.dev
        </StyledEmail>
      </div>
      <div>
        <a target="_blank" href="https://www.instagram.com/erikasmith"><Instagram /></a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
