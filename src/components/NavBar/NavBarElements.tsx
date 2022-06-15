import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #756969;
  opacity: 1;
  height: 100px;
  z-index: 900;
  position: fixed;
  top: 0;
  background-color: rgba(33, 33, 33, 0.314);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  #item {
    stroke: #fff;
    stroke-width: 1px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  margin-right: 60px;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 30px;
  font-family: "Inconsolata", monospace;
`;
