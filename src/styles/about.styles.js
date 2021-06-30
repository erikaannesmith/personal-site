import styled from "styled-components";

export const StyledContent = styled.div`
  padding: 70px 100px;
`;

export const StyledExperience = styled.div`
  font-size: 26px;
  line-height: 40px;
  padding-bottom: 50px;
`;

export const StyledExperienceItems = styled.div`
  padding-top: 10px;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 50px;
`;

export const StyledExperienceSummary = styled.div`
  font-size: 18px;
  line-height: 30px;
`;

export const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--darkgrey);
  margin: 10px 0;
`;

export const StyledExperienceHeader = styled.div`
  width: fit-content;
`;
