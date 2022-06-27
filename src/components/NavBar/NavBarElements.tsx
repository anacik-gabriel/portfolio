import { motion } from "framer-motion";
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

export const NavLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  font-family: "Inconsolata", monospace;
  position: relative;
  a {
    cursor: pointer;
  }
`;

export const Underline = styled(motion.div)`
  width: 100%;
  height: 4px;
  border-radius: 15px;
  background: #ff652f;
  opacity: 0.85;
  position: absolute;
  top: 70px;
`;

export const Test = styled(motion.div)`
  margin-top: 15px;
  cursor: pointer;
  margin-left: 60px;
  background-color: #ff652f;
  height: 70px;
  width: 70px;
  border-radius: 50px;
  box-shadow: rgba(83, 77, 77, 0.4) 0px 0px 0px 2px,
    rgba(0, 0, 0, 0.791) 0px 4px 6px -1px, rgba(0, 0, 0, 0.08) 0px 1px 0px inset;
  svg {
    margin-top: 12px;
    margin-left: 5px;
  }
  #item {
    stroke: #fff;
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;
