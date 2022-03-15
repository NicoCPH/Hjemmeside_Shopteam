import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Nav_router() {
  
  return (
    <Router>
      <ul>
            <li><Link to="/">Forside</Link></li>
            <li><Link to="/Produktion">Produktion</Link></li>
            <li><Link to="/Montage">Montage</Link></li>
            <li><Link to="/Projekter">Projekter</Link></li>
            <li><Link to="/Kontakt">Kontakt</Link></li>
          </ul> 
    </Router>
  );
}