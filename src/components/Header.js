import React from "react";
import Link from "next/link";
import { StyledName, StyledHeader } from "../styles/header.styles";

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <StyledName>ERIKA SMITH</StyledName>
    </Link>
  </StyledHeader>
);

export default Header;
