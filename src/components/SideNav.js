import React, { useRef } from "react";
import {
  SideNavWrapper,
  StyledSideNav,
  StyledNavOption,
} from "../styles/sideNav.styles.js";

const SideNav = ({ closeSideNav, navOptions }) => {
  const ref = useRef();
  const handleOutsideClick = (e) => {
    if (!ref.current.contains(e.target)) {
      closeSideNav();
    }
  };
  return (
    <SideNavWrapper onClick={(e) => handleOutsideClick(e)}>
      <StyledSideNav ref={ref}>
        {navOptions.map((option) => (
          <StyledNavOption href={option}>{option}</StyledNavOption>
        ))}
      </StyledSideNav>
    </SideNavWrapper>
  );
};

export default SideNav;
