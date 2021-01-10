import styled, { css } from 'styled-components';

export const StyledName = styled.button`
  color: #f9f7e7;
  background-color: #f3aaaa;
  border: 4px solid #f9f7e7;
  font-size: 30px;
  font-weight: 700;
  width: fit-content;
  padding: 0 10px;
  letter-spacing: 2px;
  cursor: pointer;
`;

export const StyledHeader = styled.div`
  background-color: #62bfac;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledNavItems = styled.div`
  display: flex;
`;

export const StyledNavItem = styled.div`
  color: #f9f7e7;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  padding-left: 10px;
  :hover {
    text-decoration: underline;
  };

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
    `}
`;