import React, { useState } from "react";
import {
  StyledName,
  StyledHeaderWrapper,
  StyledHeader,
  StyledNav,
  StyledNavItem,
  StyledHamburger,
} from "../styles/header.styles";
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";

const navOptions = ["/about", "/portfolio"];

const Header = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledName href="/">erika smith</StyledName>
        <StyledHamburger onClick={() => setSideNavOpen(true)}>
          <Hamburger />
        </StyledHamburger>
        <StyledNav>
          {navOptions.map((option) => (
            <StyledNavItem href={option}>{option}</StyledNavItem>
          ))}
        </StyledNav>
      </StyledHeader>
      {sideNavOpen && (
        <SideNav
          closeSideNav={() => setSideNavOpen(false)}
          navOptions={navOptions}
        />
      )}
    </StyledHeaderWrapper>
  );
};
export default Header;
