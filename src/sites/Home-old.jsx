import '../styles/App.css';
import '../styles/home.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <header>
        <div className="site_header">
        <div className="image_logo"></div>
        <ul>
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/Produktion">Produktion</Link></li>
            <li><Link to="/Montage">Montage</Link></li>
            <li><Link to="/Projekter">Projekter</Link></li>
            <li><Link to="/Kontakt">Kontakt</Link></li>
          </ul> 
          </div>

      </header>    
      <div className="home_page_start_text">
    <h1>Shop Team Internationaler Ladenbau</h1>
    <p>Alles aus einer Hand</p>
  </div>
  <div className="picture_grid">
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    </div>
    
  <div className="parentdiv">
    <img src={require("../images/circle_in_circles2.PNG")} alt="" />
  </div>
    <div className="footer">
      <div className="footer_text">
      <div>Shop Team</div> 
      <div>Vestre Gade 6</div>
      <div>Brøndby 2605</div></div>
     </div>
    </div>
  );
}

export default Home;
