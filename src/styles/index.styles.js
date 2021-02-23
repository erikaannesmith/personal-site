import styled from "styled-components";

export const StyledTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
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
    `1px solid ${isActive ? "black" : "transparent"}`};
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;

export const StyledBottomContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

export const StyledSectionInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 50px;
`;

export const StyledInfo = styled.div`
  padding-bottom: 20px;
  &.name {
    font-weight: 600;
    &:hover {
      text-decoration: underline;
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
