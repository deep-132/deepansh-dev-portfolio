import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowCaseSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      {/* <LogoShowcase /> */}
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* <Tech /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
