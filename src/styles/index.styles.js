import styled from "styled-components";

export const StyledTopContent = styled.div`
  display: grid;
  grid-template-columns: 20% 70%;
  grid-gap: 10%;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledProfileImage = styled.img`
  border-radius: 50%;
`;

export const StyledInfoTitle = styled.span`
  font-weight: 600;
  min-width: 300px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    min-width: 50%;
  }
`;

export const StyledInfoSection = styled.button`
  width: 100%;
  font-size: 20px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  padding: 10px;
  border: ${({ isActive }) =>
    `1px solid ${isActive ? "var(--darkgrey)" : "transparent"}`};
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--darkgrey);
  }
  @media screen and (max-width: 428px) {
    justify-content: center;
  }
`;

export const StyledBottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 100px;
  @media screen and (max-width: 960px) {
    padding: 50px;
  }
`;

export const StyledSectionInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-gap: 10%;
  @media screen and (max-width: 800px) {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 45%);
  }
`;

export const StyledInfo = styled.div`
  padding-bottom: 20px;
  &.name {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      color: var(--darkgrey);
    }
  }
  &.timeline {
    font-style: italic;
  }
  &.summary {
    line-height: 28px;
  }
`;

export const StyledLearnMore = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: 30px;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const StyledExperiences = styled.div`
  @media screen and (max-width: 428px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StyledValue = styled.div`
  text-align: right;
  @media screen and (max-width: 428px) {
    display: none;
  }
`;
