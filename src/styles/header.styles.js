import styled from "styled-components";

export const StyledName = styled.a`
  color: white;
  background-color: var(--blush);
  border: 4px solid white;
  font-size: 30px;
  font-weight: 700;
  width: fit-content;
  padding: 0 10px;
  letter-spacing: 2px;
  cursor: pointer;
  @media screen and (max-width: 428px) {
    width: 130px;
  }
`;

export const StyledHeader = styled.div`
  background-color: var(--suntan);
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (max-width: 960px) {
    padding: 10px;
  }
  @media screen and (max-width: 428px) {
    align-items: center;
  }
`;

export const StyledNav = styled.div`
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  padding-right: 10px;
  font-size: 17px;
  &:hover {
    text-decoration: underline;
  }
`;
