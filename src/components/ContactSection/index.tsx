import {
  ContactContainer,
  InnerContainer,
  Input,
  Title,
} from "./ContactElements";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
