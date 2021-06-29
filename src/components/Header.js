import React from "react";
import { StyledName, StyledHeader, StyledNav, StyledNavItem } from "../styles/header.styles";

const Header = () => (
  <StyledHeader>
    <StyledName href="/">erika smith</StyledName>
    <StyledNav>
      <StyledNavItem href="/about">/about</StyledNavItem>
      <StyledNavItem href="/portfolio">/portfolio</StyledNavItem>
    </StyledNav>
  </StyledHeader>
);

export default Header;
