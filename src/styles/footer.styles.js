import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  border-top: 1px solid black;
`;

export const StyledFooter = styled.div`
  background-color: white;
  height: 100px;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  @media screen and (max-width: 960px) {
    padding: 10px;
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
