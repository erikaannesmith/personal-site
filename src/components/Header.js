import React from "react";
import { StyledName, StyledHeader } from "../styles/header.styles";

const Header = ({ resetActiveSection }) => (
  <StyledHeader onClick={resetActiveSection}>
    <StyledName>ERIKA SMITH</StyledName>
  </StyledHeader>
);

export default Header;
