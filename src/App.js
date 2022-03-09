import './styles/App.css';
import './styles/home.css';
import './styles/production.css'
import './styles/montage.css'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar_footer from './sites/navbar';
import Home from './sites/Home';
import Footer from './sites/Footer';
import Produktion from './sites/Produktion';
import Montage from './sites/Montage';

function App() {
  return (
    <div className="App">
    <Navbar_footer/>
    <div className="content">
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Produktion" element={<Produktion/>} />
        <Route path="/Montage" element={<Montage/>} />
        <Route path="/Projekter" element={"nothing"} />
        <Route path="/Kontakt" element={"nothing"} />
    </Routes>
    </div>
    <div className="footer">
        <Footer/>
        </div>
    </div>
  );
}

export default App;
