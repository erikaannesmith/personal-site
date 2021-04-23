import styled from "styled-components";

export const StyledTopContent = styled.div`
  display: grid;
  grid-template-columns: 20% 70%;
  grid-gap: 10%;
  align-items: center;
`;

export const StyledProfileImage = styled.img`
  border-radius: 50%;
`;

export const StyledInfoTitle = styled.span`
  font-weight: 600;
  min-width: 300px;
  display: flex;
  align-items: center;
`;

export const StyledInfoSection = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  padding: 10px;
  border: ${({ isActive }) =>
    `1px solid ${isActive ? "var(--blush)" : "transparent"}`};
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--blush);
  }
`;

export const StyledBottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 100px;
`;

export const StyledSectionInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-gap: 10%;
`;

export const StyledInfo = styled.div`
  padding-bottom: 20px;
  &.name {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      color: var(--blush);
    }
  }
  &.timeline {
    font-style: italic;
  }
  &.summary {
    line-height: 25px;
  }
`;

export const StyledLearnMore = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: 30px;
  padding: 10px;
  font-weight: 600;
  font-size: 18px;
`;

export const StyledValue = styled.div`
  text-align: right;
`;
