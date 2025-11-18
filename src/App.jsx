import NavBar from "./components/Navbar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import AppShowcase from "./sections/ShowCaseSection";
import Tech from "./sections/Tech";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* <Tech /> */}
    </>
  );
};

export default App;
