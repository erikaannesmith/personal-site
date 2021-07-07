import styled from "styled-components";

export const SideNavWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #80808099;
  margin-top: -60px;
`;

export const StyledSideNav = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  background-color: grey;
  height: 100vh;
`;

export const StyledNavOption = styled.a`
  height: 70px;
  border-bottom: 1px solid darkgrey;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: white;
  letter-spacing: 3px;
  font-size: 20px;
`;
