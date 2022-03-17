import React, {useEffect, useState, useRef} from 'react'
import Circle from '../scripts/circles'
function Home(props) {
const [value, setValue] = useState(props.t)

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
    <div className="parentdiv">
    <div id='parentdivs'>

    {/* <img src={require("../images/circles_gray_v4.png")} alt="" /> */}
    </div></div> 
    </div>
  );
}

export default Home;
