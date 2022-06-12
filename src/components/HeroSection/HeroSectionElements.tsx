import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export const HeroTextLeft = styled.h1`
  & {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 150px;
    color: white;
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
    color: white;
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
  @media (min-width: 1501px) {
    max-width: 1260px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
