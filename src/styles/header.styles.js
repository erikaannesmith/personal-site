import styled from 'styled-components';

const blush = '#c08279'
const cowboyHat = 'white'
const suntan = '#cf9879'

export const StyledName = styled.a`
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
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledNav = styled.div`
  text-transform: uppercase;
  color: ${cowboyHat};
  font-weight: 600;
  padding-right: 10px;
  font-size: 17px;
  &:hover {
    text-decoration: underline;
  }
`;