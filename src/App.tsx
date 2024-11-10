import { useEffect, useState } from 'react';
import './App.css'
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
    </BrowserRouter>
  )
}

export default App
