import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ContactContainer,
  ContactWrapper,
  FormContainer,
  InnerContainer,
  LeftIcons,
  LeftIconsContainer,
  Button,
  Control,
  ControlText,
  Form,
  FormGroup,
  FormLabel,
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
  const [inputActive, setInputActive] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const form = useRef(null);

  const successPrompt = () => toast.success("Got your message, Thank You!");
  const errorPrompt = (message: string) => toast.error("message");
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
        () => {
          successPrompt();
        },
        (error: EmailJSResponseStatus) => {
          errorPrompt(error.text);
        }
      );
  };
  return (
    <>
      <ToastContainer position="top-center" style={{ marginTop: "100px" }} />
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
                  <p>Bia??ystok, Poland</p>
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
                <Form ref={form} onSubmit={sendEmail}>
                  <FormGroup
                    onFocus={() => setInputActive(1)}
                    onBlur={() => setInputActive(0)}
                  >
                    <FormLabel
                      className={inputActive === 1 ? "focused" : ""}
                      htmlFor="name"
                    >
                      Your name
                    </FormLabel>
                    <Control
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Walter White"
                      tabIndex={1}
                      required
                    ></Control>
                  </FormGroup>
                  <FormGroup
                    onFocus={() => setInputActive(2)}
                    onBlur={() => setInputActive(0)}
                  >
                    <FormLabel
                      className={inputActive === 2 ? "focused" : ""}
                      htmlFor="email"
                    >
                      Your Email
                    </FormLabel>
                    <Control
                      type="email"
                      id="email"
                      name="email"
                      placeholder="saymyname@gmail.com"
                      tabIndex={2}
                      required
                    ></Control>
                  </FormGroup>
                  <FormGroup
                    onFocus={() => setInputActive(3)}
                    onBlur={() => setInputActive(0)}
                  >
                    <FormLabel
                      className={inputActive === 3 ? "focused" : ""}
                      htmlFor="subject"
                    >
                      Subject
                    </FormLabel>
                    <Control
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Hello!"
                      tabIndex={3}
                      required
                    ></Control>
                  </FormGroup>
                  <FormGroup
                    onFocus={() => setInputActive(4)}
                    onBlur={() => setInputActive(0)}
                  >
                    <FormLabel
                      className={inputActive === 4 ? "focused" : ""}
                      htmlFor="message"
                    >
                      Message
                    </FormLabel>
                    <ControlText
                      rows={5}
                      cols={50}
                      id="message"
                      name="message"
                      placeholder="Enter Message..."
                      tabIndex={4}
                    ></ControlText>
                  </FormGroup>

                  <Button type="submit">
                    <span>Send!</span>
                  </Button>
                </Form>
              </FormContainer>
            </ContactWrapper>
          </InnerContainer>
        </ContactContainer>
      </Element>
    </>
  );
};

export default ContactSection;
