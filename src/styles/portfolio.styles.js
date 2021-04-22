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
  .title {
    font-weight: 700;
  }
  .preview {
    font-size: 14px;
    padding-top: 10px;
  }
  &:hover {
    .title {
      color: #c08279;
    }
    border-color: #c08279;
  }
`;
