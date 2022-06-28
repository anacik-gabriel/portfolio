import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  width: 100%;
  height: 100vh;
`;

export const HeroTextLeft = styled.h1`
  & {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 150px;
    color: #ffffff;
    width: 100%;
    margin: 0;
    position: relative;
  }
  &:before {
    content: "<h1>";
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    position: absolute;
  }
`;

export const HeroTextRight = styled.h1`
  & {
    display: flex;
    justify-content: flex-end;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 150px;
    color: #ff652f;
    width: 100%;
    margin: 0;
    position: relative;
  }
  &:after {
    content: "</h1>";
    font-family: "Dancing Script", cursive;
    font-size: 30px;
    position: absolute;
    bottom: 0;
  }
`;

export const InnerContainer = styled.div`
  max-width: 1260px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
