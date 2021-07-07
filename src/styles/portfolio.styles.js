import styled from "styled-components";

export const StyledPortfolioItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 30px;
  padding: 70px 100px;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    grid-template-columns: none;
    padding: 50px 30px;
  }
`;

export const StyledPortfolioItem = styled.a`
  border: 1px solid black;
  padding: 50px 40px;
  margin-bottom: 30px;
  max-width: 900px;
  font-size: 20px;
  &:hover {
    box-shadow: -6px -6px var(--darkgrey);
    transition: 0.2s;
  }
  .title {
    font-weight: 700;
  }
  .preview {
    font-size: 18px;
    padding-top: 10px;
  }
  &:hover {
    .title {
      color: var(--darkgrey);
    }
    border-color: var(--darkgrey);
  }
`;
