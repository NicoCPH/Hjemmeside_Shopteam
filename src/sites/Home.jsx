import React, {useEffect, useState, useRef} from 'react'
import Circle from '../scripts/circles'
function Home(props) {

function Picture_circle() {
  let url
  if (props.t("home.lng") === "en") {
    console.log(props.t("home.lng"))
    url = require("../images/circles_gray_v4.png")
    console.log(url)
  } else if(props.t("home.lng") === "de") {
    console.log(props.t("home.lng"))
    url = require("../images/circles-v3.png")
    console.log(url)
  } else {
    console.log(props.t("home.lng"))
    url = require("../images/circle-v1.2.png.png")
    console.log(url)
  }
return(
  <div className="parentdiv">
  <img src={url} alt="" /> 
  </div>
)
}
const firstRun = useRef(true);
useEffect(() => { 
  if (firstRun.current) {

    console.log('rendered!')
    firstRun.current = false;
    return;
  }

    }, [props.t("home.welcome")]);

  return (
   
    <div className="home">  
      <div className="home_page_start_text">
    <h1>{props.t("home.welcome")}</h1>
    <p>Alles aus einer Hand</p>
  </div>
  <div className="picture_grid">
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    </div>
    <Picture_circle/>
    </div>
  );
}

export default Home;
