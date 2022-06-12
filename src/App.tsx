import "./App.css";
import styled from "styled-components";
import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";

const MainContainer = styled.main`
  position: relative;
  z-index: 0;
  padding: 0px 10rem;
  overflow-x: hidden;
  #tsparticles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
function App() {
  return (
    <>
      <NavBar />
      <MainContainer>
        <ParticleBackground />
      </MainContainer>
    </>
  );
}

export default App;
