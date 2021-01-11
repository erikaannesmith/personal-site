import styled, { css } from 'styled-components';

const blush = '#b56a5ad4'
const cowboyHat = '#edede3'
const suntan = '#d3b38c'

export const StyledName = styled.button`
  color: ${cowboyHat};
  background-color: ${blush};
  border: 4px solid ${cowboyHat};
  font-size: 30px;
  font-weight: 700;
  width: fit-content;
  padding: 0 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const StyledHeader = styled.div`
  background-color: ${suntan};
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledNavItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledNavItem = styled.div`
  color: ${cowboyHat};
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  :hover {
    text-decoration: underline;
  };

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
    `}
`;