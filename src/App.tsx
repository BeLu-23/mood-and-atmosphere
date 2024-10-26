import { useEffect, useState } from 'react';
import './App.css'
// import NavBar from './components/NavBar'
// import HomeSection from './components/HomeSection';
// import AboutUsSection from './components/AboutUsSection';
// import FotoSection from './components/FotoSection';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

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
    // TODO change this to '/' when published on all-inkl.com
    <BrowserRouter basename='/mood-and-atmosphere'>
      <Routes>
        <Route path='/' element={<HomeScreen windowWidth={windowWidth} />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
      </Routes>
      {/* <NavBar windowWidth={windowWidth} />
      <HomeSection />
      <AboutUsSection windowWidth={windowWidth} />
      <FotoSection windowWidth={windowWidth}/>
      <Footer /> */}
    </BrowserRouter>
  )
}

export default App
