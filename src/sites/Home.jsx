import '../styles/App.css';
import '../styles/home.css';
import React from "react";



function Home() {
  return (
    <div className="home">  
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

    </div>
  );
}

export default Home;
