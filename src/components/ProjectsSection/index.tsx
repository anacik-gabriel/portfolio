import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import {
  PerspectiveContainer,
  InnerContainer,
  ProjectBox,
  ProjectBoxContainer,
  ProjectsContainer,
  Title,
} from "./ProjectsElements";

const ProjectsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.7 });
  const controls = useAnimation();

  const variants = {
    hidden: { rotateX: 0, opacity: 0 },
    visible: {
      rotateX: [40, -20, 10, -5, 0],
      opacity: 1,
      transition: { rotateX: { duration: 1.3 } },
    },
  };

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [inView, controls]);
  return (
    <Element name="projects">
      <ProjectsContainer>
        <InnerContainer>
          <Title>
            <h1>Projects</h1>
          </Title>
          <ProjectBoxContainer>
            <PerspectiveContainer>
              <ProjectBox
                variants={variants}
                whileHover={{ backgroundColor: "#ff652f", y: -10 }}
                ref={ref}
                animate={controls}
              ></ProjectBox>
            </PerspectiveContainer>
            <PerspectiveContainer>
              <ProjectBox
                variants={variants}
                ref={ref}
                animate={controls}
                whileHover={{ backgroundColor: "#ff652f", y: -10 }}
              ></ProjectBox>
            </PerspectiveContainer>
            <PerspectiveContainer>
              <ProjectBox
                variants={variants}
                whileHover={{
                  backgroundColor: "#ff652f",
                  y: -10,
                }}
                ref={ref}
                animate={controls}
              ></ProjectBox>
            </PerspectiveContainer>
          </ProjectBoxContainer>
        </InnerContainer>
      </ProjectsContainer>
    </Element>
  );
};

export default ProjectsSection;
