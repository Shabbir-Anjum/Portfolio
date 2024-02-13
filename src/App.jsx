import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Header/Navbar";
import Hero from "./Components/Main/Hero";
import FeaturedProject from "./Components/Projects/FeaturedProject";
import OtherProject from "./Components/Projects/OtherProject";
import Loader from "./Components/Loader";
import AnimationControls from "./Components/AnimationControls";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <FeaturedProject />
          <OtherProject />
          <Contact />
        </>
      )}
        <AnimationControls/>
    </>
  );
}

export default App;
