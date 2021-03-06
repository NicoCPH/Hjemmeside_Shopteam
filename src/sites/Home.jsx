import React, {useEffect, useRef} from 'react'
import {Circles} from '../scripts/circles'
function Home(props) {





function PictureCircle() {
  let url
  if (props.t("home.lng") === "en") {
    console.log(props.t("home.lng"))
    url = require("../images/CIRCLES_EN_OSWALD.png")
    console.log(url)
  } else {
    console.log(props.t("home.lng"))
    url = require("../images/CIRCLES_DE_OSWALD.png")
    console.log(url)
  } 
return(
  <div className="parentdiv">
  <img src={url} alt="" /> 
  </div>
)
}

let langauge_change = props.t("home.welcome")
const firstRun = useRef(true);
useEffect(() => { 
  if (firstRun.current) {

    console.log('rendered!')
    firstRun.current = false;
    return;
  }

    }, [langauge_change]);

  return (
   
    <div className="home">  
      <div className="home_page_start_text">
    <h1>{props.t("home.welcome")}</h1>
    <p>{props.t("home.h2")}</p>
  </div>
  <div className="picture_grid">
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    <img src={require("../images/intro01_02.jpg")} alt="" />
    </div>
    <PictureCircle/>
    </div>
  );
}

export default Home;
