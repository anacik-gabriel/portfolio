import "./App.css";
import styled from "styled-components";
import ParticleBackground from "./components/ParticleBackground";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const MainContainer = styled.main`
  position: relative;
  z-index: 0;
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
        <div className="container">
          <HeroSection />
          <InfoSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </MainContainer>
    </>
  );
}

export default App;
