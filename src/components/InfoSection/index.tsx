import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  AboutMe,
  Card,
  Icon,
  InfoContainer,
  InnerContainer,
  Skills,
  Title,
} from "./InfoElements";
import tsIcon from "../../assets/type.png";
import vsIcon from "../../assets/vsLogo.png";
import jsIcon from "../../assets/js.png";
import htmlIcon from "../../assets/htmlIcon.png";
import reactIcon from "../../assets/react-logo.png";
import sassIcon from "../../assets/sassLogo.png";
import cssIcon from "../../assets/css.png";
import styledIcon from "../../assets/atom.png";
import githubIcon from "../../assets/github.png";

const InfoSection = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  const Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <InfoContainer>
      <InnerContainer>
        <Card
          layout
          variants={Variants}
          animate={controls}
          initial={"hidden"}
          ref={ref}
          transition={{ duration: 3, delay: 0 }}
        >
          <Title layout>
            <h1>About Me</h1>
          </Title>
          <AboutMe layout>
            <p>
              I'm a mostly self-taught wannabe front-end developer. Although I
              have still a lot to learn, im eager to stay at this path and
              continously expand my skills and knowledge.
            </p>
            <p>
              Currently Im looking for oppurtunity to work alongside experienced
              developers to polish my skills and gain experience in the field.
            </p>
            <p>
              I'm a hard-working and humble person, open for any challlenges, so
              don't hesitate to reach me out if you want to say Hello or throw
              some tips!
            </p>
          </AboutMe>
        </Card>
        <Card
          style={{ alignSelf: "center" }}
          layout
          variants={Variants}
          animate={controls}
          initial={"hidden"}
          ref={ref}
          transition={{ duration: 3, delay: 0 }}
        >
          <Title layout>
            <h2>Technologies & Tools I Can Use</h2>
          </Title>
          <Skills layout>
            <Icon>
              <img src={htmlIcon} alt="" />
              HTML5
            </Icon>
            <Icon>
              <img src={cssIcon} alt="" />
              CSS3
            </Icon>
            <Icon>
              <img src={jsIcon} alt="" />
              JavaScript
            </Icon>
            <Icon>
              <img src={tsIcon} alt="" />
              TypeScript
            </Icon>
            <Icon>
              <img src={reactIcon} alt="" />
              React
            </Icon>
            <Icon>
              <img src={vsIcon} alt="" />
              VS Code
            </Icon>
            <Icon>
              <img src={sassIcon} alt="" />
              SASS
            </Icon>
            <Icon>
              <img src={githubIcon} alt="" />
              Github
            </Icon>
            <Icon>
              <img src={styledIcon} alt="" />
              Styled Components
            </Icon>
          </Skills>
        </Card>
      </InnerContainer>
    </InfoContainer>
  );
};

export default InfoSection;
