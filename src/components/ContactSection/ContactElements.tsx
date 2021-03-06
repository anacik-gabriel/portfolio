import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const InnerContainer = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.div`
  padding: 15px;
  width: 100%;
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
`;

export const FormContainer = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-top: 20px;
  padding: 60px;
  background-color: rgb(46, 45, 45);
  width: 45%;
  border-radius: 20px;
  p {
    color: #ff652f;
    font-family: "Roboto", sans-serif;
    font-size: 2em;
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
  }
`;

export const Form = styled.form`
  .focused {
    opacity: 1;
    transform: translateX(0px);
  }
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5em;
  transition: all 0.3s;
  &:focus-within {
    transform: scale(1.1, 1.1);
  }
`;

export const FormLabel = styled.label`
  font-size: 1em;
  color: #ff652f;
  display: block;
  opacity: 0;
  transition: all 0.3s;
  transform: translateX(-50px);
  font-family: "Roboto", sans-serif;
`;

export const Control = styled.input`
  background-color: #3e3d3e;
  color: #8e8e8e;
  border-radius: 0;
  border-color: #ff652f;
  border-style: none none solid none;
  width: 100%;
  height: 50px;
  font-size: 1.25em;
  transition: all 0.6s;
  font-family: "Roboto", sans-serif;
  font-size: 1.3em;
  padding: 10px;
  &:focus {
    box-shadow: none;
    border-color: green;
    outline: none;
  }

  &:invalid:focus {
    border-color: red;
  }
`;

export const ControlText = styled.textarea`
  box-shadow: none;
  color: #8e8e8e;
  background-color: #3e3d3e;
  border: 2px solid;
  border-radius: 0;
  border-color: #ff652f;
  border-style: none none solid none;
  width: 100%;
  font-size: 1.25em;
  transition: all 0.6s;
  resize: none;
  font-family: "Roboto", sans-serif;
  font-size: 1.3em;
  padding: 10px;

  &:focus {
    box-shadow: none;
    border-color: green;
    outline: none;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  align-self: center;
  height: 60px;
  width: 40%;
  appearance: none;
  background-color: #3e3d3e;
  border-width: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #8e8e8e;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(0.694, 0, 0.335, 1),
    background-color 100ms cubic-bezier(0.694, 0, 0.335, 1),
    color 100ms cubic-bezier(0.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
  }
  &:before {
    border-radius: 10px;
    animation: opacityFallbackOut 0.5s step-end forwards;
    backface-visibility: hidden;
    background-color: #ff652f;
    clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(0);
    transition: clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
      -webkit-clip-path 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
  }

  &:hover:before {
    animation: opacityFallbackIn 0s step-start forwards;
    clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
  }

  &:after {
    background-color: #ffffff;
  }
  span {
    z-index: 1;
    position: relative;
  }
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10%;
  p {
    color: white;
    font-family: "Roboto", monospace;
    font-size: 1.3em;
  }
`;

export const LeftIconsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%;
  width: 50%;
`;
