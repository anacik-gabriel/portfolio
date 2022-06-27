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
  ProjectBoxInner,
} from "./ProjectsElements";
import portfolioImage from "../../assets/portfolio.png";
import watchlistImage from "../../assets/watchlist.png";
import { AiOutlineFolder } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

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
                whileHover={{ y: -10 }}
                ref={ref}
                animate={controls}
              >
                <img alt="" src={portfolioImage} />
                <ProjectBoxInner>
                  <div className="icons">
                    <AiOutlineFolder color="#fff" size={"3rem"} />
                    <div className="links">
                      <a href="https://github.com/anacik-gabriel/portfolio">
                        <BsGithub size={"2rem"} color="#fff" />
                      </a>
                      <a href="https://portfolio-anacik-gabriel.vercel.app/">
                        <GoLinkExternal size={"2rem"} color="#fff" />
                      </a>
                    </div>
                  </div>
                  <h2>Portfolio</h2>
                  <p>Needless to say, page you're currently on.</p>
                </ProjectBoxInner>
              </ProjectBox>
            </PerspectiveContainer>
            <PerspectiveContainer>
              <ProjectBox
                variants={variants}
                ref={ref}
                animate={controls}
                whileHover={{ y: -10 }}
              >
                <img alt="" src={watchlistImage} />
                <ProjectBoxInner>
                  <div className="icons">
                    <AiOutlineFolder color="#fff" size={"3rem"} />
                    <div className="links">
                      <a href="https://github.com/anacik-gabriel/movie-watchlist">
                        <BsGithub size={"2rem"} color="#fff" />
                      </a>
                      <a href="https://movie-watchlist-ten.vercel.app/">
                        <GoLinkExternal size={"2rem"} color="#fff" />
                      </a>
                    </div>
                  </div>
                  <h2>Movie Watchlist</h2>
                  <p>
                    Simple website to track watched Movies/TVs, watchlist stored
                    in local storage.
                  </p>
                </ProjectBoxInner>
              </ProjectBox>
            </PerspectiveContainer>
            <PerspectiveContainer>
              <ProjectBox variants={variants} ref={ref} animate={controls}>
                <div className="placeholder">
                  <p>Work in progress, more soon : )</p>
                </div>
              </ProjectBox>
            </PerspectiveContainer>
          </ProjectBoxContainer>
        </InnerContainer>
      </ProjectsContainer>
    </Element>
  );
};

export default ProjectsSection;
