import styled from "styled-components";

export const StyledName = styled.a`
  color: white;
  font-size: 36px;
  width: fit-content;
  letter-spacing: 2px;
  cursor: pointer;
  @media screen and (max-width: 428px) {
    font-size: 30px;
  }
`;

export const StyledHeader = styled.div`
  background-color: var(--darkgrey);
  height: 60px;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  @media screen and (max-width: 960px) {
    padding: 10px;
  }
`;

export const StyledNav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 30px;
`;

export const StyledNavItem = styled.a`
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
