import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const InnerContainer = styled.div`
  @media (min-width: 1501px) {
    max-width: 1260px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  border: 1px solid #5d5c61;
  background-color: #5d5c61;
  font-size: 15px;
  padding-left: 5px;
  color: #b4b2b8;
  transition: 0.5s ease;

  &:hover {
    border: 2px solid #737376;
  }
  &:placeholder {
    color: #b4b2b8;
  }
  &:focus {
    border: 2px solid #ff6f69;
  }
`;

export const Title = styled.div`
  padding: 15px;
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
