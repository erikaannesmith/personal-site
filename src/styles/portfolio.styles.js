import styled from "styled-components";

export const StyledPortfolioItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPortfolioItem = styled.a`
  border: 1px solid black;
  padding: 50px 40px;
  margin-bottom: 30px;
  max-width: 900px;
  font-size: 20px;
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
