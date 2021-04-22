import React from "react";
import { StyledName, StyledHeader, StyledNav } from "../styles/header.styles";

const Header = ({ resetActiveSection }) => (
  <StyledHeader onClick={resetActiveSection}>
    <StyledName href="/">ERIKA SMITH</StyledName>
    <StyledNav>
      <div>
        <a href="/portfolio">/portfolio</a>
      </div>
    </StyledNav>
  </StyledHeader>
);

export default Header;
