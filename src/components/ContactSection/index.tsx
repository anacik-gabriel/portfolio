import { Element } from "react-scroll";
import {
  ContactContainer,
  InnerContainer,
  Input,
  Title,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <Element name="contact">
      <ContactContainer>
        <InnerContainer>
          <Title>
            <h1>Contact Me</h1>
          </Title>
          <form>
            <Input type="text" />
          </form>
        </InnerContainer>
      </ContactContainer>
    </Element>
  );
};

export default ContactSection;
