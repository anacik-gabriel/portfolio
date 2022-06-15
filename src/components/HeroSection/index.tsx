import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  HeroContainer,
  HeroTextLeft,
  HeroTextRight,
  InnerContainer,
} from "./HeroSectionElements";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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

const textLeftVariants = {
  visible: { x: 0 },
  hidden: { x: -1800 },
};

const textRightVariants = {
  visible: { x: 0 },
  hidden: { x: 1800 },
};
const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <Element name="home">
      <HeroContainer>
        <InnerContainer>
          <HeroTextLeft
            as={motion.h1}
            variants={textLeftVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
            transition={{ type: "tween", duration: 3 }}
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
            variants={textRightVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
            transition={{ type: "tween", duration: 3 }}
          >
            <motion.span whileHover={{ color: "#ffffff" }}>D</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>E</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>V</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>E</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>L</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>O</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>P</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>E</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }}>R</motion.span>
          </HeroTextRight>
          <motion.h2
            style={{
              color: "#ffffff",
              fontFamily: "Dancing Script, cursive",
              fontSize: "50px",
            }}
            variants={sentence}
            initial="hidden"
            animate={controls}
            ref={ref}
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
    </Element>
  );
};

export default HeroSection;
