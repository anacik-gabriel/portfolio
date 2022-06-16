import styled from "styled-components";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Test = styled(motion.div)`
  cursor: pointer;

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
