import styled from "styled-components";

export const StyledName = styled.a`
  color: white;
  background-color: var(--darkgrey);
  border: 4px solid white;
  font-size: 36px;
  font-weight: 700;
  width: fit-content;
  padding: 0 10px;
  letter-spacing: 2px;
  cursor: pointer;
  @media screen and (max-width: 428px) {
    width: 130px;
    font-size: 30px;
  }
`;

export const StyledHeader = styled.div`
  background-color: var(--army);
  height: 100px;
  align-items: center;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    padding: 10px;
  }
`;

export const StyledNav = styled.div`
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  padding-right: 10px;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`;
