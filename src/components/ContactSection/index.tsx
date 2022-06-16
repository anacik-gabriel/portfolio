import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import {
  ContactContainer,
  ContactWrapper,
  FormContainer,
  InnerContainer,
  LeftIcons,
  LeftIconsContainer,
  NewButton,
  TestControl,
  TestControlText,
  TestForm,
  TestFormGroup,
  TestFormLabel,
  Title,
} from "./ContactElements";
import { BiMobileVibration } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

import { TbMail } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const iconStyle = {
  boxShadow: `rgba(83, 77, 77, 0.4) 0px 0px 0px 2px,
    rgba(0, 0, 0, 0.791) 0px 4px 6px -1px ,rgba(0, 0, 0, 0.08) 0px 1px 0px inset`,
  color: "#fff",
  backgroundColor: "#ff652f",
  borderRadius: "50px",
  padding: "5px",
};
const ContactSection = () => {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [subjectActive, setSubjectActive] = useState(false);
  const [textareaActive, setTextareaActive] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const form = useRef(null);
  const formVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  const leftIconsVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (form.current === null) {
      return;
    }
    e.preventDefault();
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (SERVICE_ID === undefined || PUBLIC_KEY === undefined) {
      return;
    }
    emailjs
      .sendForm(SERVICE_ID, "template_77g45or", form.current, PUBLIC_KEY)
      .then(
        (result: EmailJSResponseStatus) => {
          alert(result.text);
        },
        (error: EmailJSResponseStatus) => {
          alert(error.text);
        }
      );
  };
  return (
    <Element name="contact">
      <ContactContainer>
        <InnerContainer ref={ref}>
          <Title>
            <h1>Contact Me</h1>
          </Title>
          <ContactWrapper>
            <LeftIconsContainer
              variants={leftIconsVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 2 }}
            >
              <LeftIcons>
                <GoLocation size={"5em"} style={iconStyle} />
                <p>Białystok, Poland</p>
              </LeftIcons>
              <LeftIcons>
                <BiMobileVibration size={"5em"} style={iconStyle} />
                <p>+48 795-068-761</p>
              </LeftIcons>
              <LeftIcons>
                <TbMail size={"5em"} style={iconStyle} />
                <p>anacik.gabriel@gmail.com</p>
              </LeftIcons>
            </LeftIconsContainer>
            <FormContainer
              variants={formVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 2 }}
            >
              <p>Send Email</p>
              <TestForm ref={form} onSubmit={sendEmail}>
                <TestFormGroup
                  onFocus={() => setNameActive(true)}
                  onBlur={() => setNameActive(false)}
                >
                  <TestFormLabel
                    className={nameActive ? "focused" : ""}
                    htmlFor="name"
                  >
                    Your name
                  </TestFormLabel>
                  <TestControl
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Walter White"
                    tabIndex={1}
                    required
                  ></TestControl>
                </TestFormGroup>
                <TestFormGroup
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => setEmailActive(false)}
                >
                  <TestFormLabel
                    className={emailActive ? "focused" : ""}
                    htmlFor="email"
                  >
                    Your Email
                  </TestFormLabel>
                  <TestControl
                    type="email"
                    id="email"
                    name="email"
                    placeholder="saymyname@gmail.com"
                    tabIndex={2}
                    required
                  ></TestControl>
                </TestFormGroup>
                <TestFormGroup
                  onFocus={() => setSubjectActive(true)}
                  onBlur={() => setSubjectActive(false)}
                >
                  <TestFormLabel
                    className={subjectActive ? "focused" : ""}
                    htmlFor="subject"
                  >
                    Subject
                  </TestFormLabel>
                  <TestControl
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Hello there!"
                    tabIndex={3}
                    required
                  ></TestControl>
                </TestFormGroup>
                <TestFormGroup
                  onFocus={() => setTextareaActive(true)}
                  onBlur={() => setTextareaActive(false)}
                >
                  <TestFormLabel
                    className={textareaActive ? "focused" : ""}
                    htmlFor="message"
                  >
                    Message
                  </TestFormLabel>
                  <TestControlText
                    rows={5}
                    cols={50}
                    id="message"
                    name="message"
                    placeholder="Enter Message..."
                    tabIndex={4}
                  ></TestControlText>
                </TestFormGroup>

                <NewButton type="submit">
                  <span>Send!</span>
                </NewButton>
              </TestForm>
            </FormContainer>
          </ContactWrapper>
        </InnerContainer>
      </ContactContainer>
    </Element>
  );
};

export default ContactSection;
