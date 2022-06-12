import { motion } from "framer-motion";
import { useState } from "react";
import {
  HeroContainer,
  HeroTextLeft,
  HeroTextRight,
  InnerContainer,
} from "./HeroSectionElements";

const line = "Hi, my name is Gabriel!";
const line2 = "I'm a beginner web-developer.";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const HeroSection = () => {
  const [move, setMove] = useState(true);

  return (
    <HeroContainer>
      <InnerContainer>
        <HeroTextLeft
          as={motion.h1}
          initial={{ x: -1800 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 3 }}
          onClick={() => {
            setMove(!move);
          }}
        >
          <motion.span whileHover={{ color: "#ff652f" }}>F</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>R</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>O</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>N</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>T</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>-</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>E</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>N</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>D</motion.span>
        </HeroTextLeft>
        <HeroTextRight
          as={motion.h1}
          initial={{ x: 1800 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 3 }}
          onClick={() => {
            setMove(!move);
          }}
        >
          <motion.span whileHover={{ color: "#ff652f" }}>D</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>E</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>V</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>E</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>L</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>O</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>P</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>E</motion.span>
          <motion.span whileHover={{ color: "#ff652f" }}>R</motion.span>
        </HeroTextRight>
        <motion.h2
          style={{
            color: "white",
            fontFamily: "Dancing Script, cursive",
            fontSize: "50px",
          }}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {line.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {line2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h2>
      </InnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
