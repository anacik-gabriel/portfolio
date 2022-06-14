import { motion } from "framer-motion";
import styled from "styled-components";

export const InfoContainer = styled.section`
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
  align-items: start;
  gap: 100px;
`;

export const Card = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(motion.div)`
  padding: 15px;
  h1 {
    font-family: "Kdam Thmor Pro", sans-serif;
    color: #ff652f;
    font-size: 40px;
    position: relative;

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

  h2 {
    font-family: "Kdam Thmor Pro", sans-serif;
    color: #ff652f;
    font-size: 40px;
    position: relative;

    padding-top: 10px;
  }
  h2:after {
    content: "";
    background-color: #ff652f;
    height: 2px;
    position: relative;
    width: 100%;
    display: block;
  }
`;

export const AboutMe = styled(motion.div)`
  padding-left: 15px;
  max-width: 700px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
`;

export const Skills = styled(motion.div)`
  img {
    width: 50px;
    height: 50px;
  }
  h3 {
    color: white;
    font-size: 25px;
  }
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 20px;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
  text-align: center;
  align-items: center;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  gap: 10px;
`;
