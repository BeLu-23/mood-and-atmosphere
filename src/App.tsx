import { useEffect, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar'
import HomeSection from './components/HomeSection';
import AboutUsSection from './components/AboutUsSection';
import FotoSection from './components/FotoSection';
import Footer from './components/Footer';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar windowWidth={windowWidth} />
      <HomeSection />
      <AboutUsSection />
      <FotoSection />
      <Footer />
    </>
  )
}

export default App
