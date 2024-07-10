import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import ModelPhone from "./components/ModelPhone";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <main className="bg-black">
        <NavBar />
        <Hero />
        <Highlights />
        <ModelPhone />
        <Features />
        <HowItWorks />
        {/* <Chameleon /> */}
        <Footer />
      </main>
    </>
  );
};

export default App;
