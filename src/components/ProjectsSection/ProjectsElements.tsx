import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
`;

export const InnerContainer = styled.div`
  @media (min-width: 1501px) {
    max-width: 1700px;
  }
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const ProjectBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const ProjectBox = styled(motion.div)`
  width: 500px;
  height: 300px;
  background-color: rgb(43, 43, 43);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(27, 26, 25, 0.65) 0px 4px 6px -1px,
    rgba(207, 205, 189, 0.08) 0px 1px 0px 0px inset;
  border-radius: 10px;
`;

export const Title = styled(motion.div)`
  padding: 15px;
  h1 {
    font-family: "Kdam Thmor Pro", sans-serif;
    color: #ff652f;
    font-size: 40px;
    position: relative;
    text-align: center;

    padding-top: 10px;
  }
  h1:after {
    content: "";
    background-color: #ff652f;
    height: 2px;
    position: relative;
    width: 100%;
    display: block;
  }
`;

export const PerspectiveContainer = styled.div`
  perspective: 400px;
`;
