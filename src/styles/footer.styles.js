import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid black;
`;

export const StyledFooter = styled.div`
  padding: 50px 100px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  background-color: white;
  @media screen and (max-width: 960px) {
    padding: 30px 10px;
  }
`;

export const StyledEmail = styled.a`
  &:hover {
    font-weight: 500;
    text-decoration: underline;
    color: var(--darkgrey);
  }
`;

export const StyledIcon = styled.a`
  &:hover {
    color: var(--darkgrey);
  }
  svg {
    fill: currentColor;
  }
`;

export const StyledIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
`;
