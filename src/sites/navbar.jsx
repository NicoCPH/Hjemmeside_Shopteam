import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar_footer(){
    return(
     <div>
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
    </div>   
);
}

export default Navbar_footer