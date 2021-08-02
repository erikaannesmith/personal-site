import styled from "styled-components";

export const StyledBlurb = styled.div`
  padding: 70px 100px;
  font-size: 26px;
  line-height: 40px;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    padding: 50px 30px;
  }
`;

export const StyledBlurbSection = styled.div`
  padding-top: 10px;
  font-size: 22px;
`;

export const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--darkgrey);
  margin: 10px 0;
`;

export const StyledBlurbIntro = styled.div`
  width: fit-content;
`;
