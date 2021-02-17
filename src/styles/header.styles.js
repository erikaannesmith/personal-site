import styled from 'styled-components';

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
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
