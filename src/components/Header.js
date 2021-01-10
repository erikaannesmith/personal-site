import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {
  StyledName,
  StyledHeader,
  StyledNavItems,
  StyledNavItem,
} from "../styles/header.styles";

const Header = () => {
  const { pathname } = useRouter();

  const navItems = ["/itemOne", "/itemTwo", "/itemThree"];
  return (
    <StyledHeader>
      <Link href="/">
        <StyledName>ERIKA SMITH</StyledName>
      </Link>
      <StyledNavItems>
        {navItems.map((item) => (
          <StyledNavItem key={item} isActive={item === pathname}>
            <Link href={item}>{item}</Link>
          </StyledNavItem>
        ))}
      </StyledNavItems>
    </StyledHeader>
  );
};

export default Header;
