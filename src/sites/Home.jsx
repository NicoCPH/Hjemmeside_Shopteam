import React, { useEffect, useRef, useState } from "react";
import EnglishPicture from "../images/engpic.png"
import GermanPicture from "../images/germanpic.png"
function Home(props) {
  let url;
    if (props.t("home.lng") === "en") {
      console.log(props.t("home.lng"));
      url = EnglishPicture;
    }
    if (props.t("home.lng") === "de") {
      console.log(props.t("home.lng"));
      url = GermanPicture;
    }



  let langauge_change = props.t("home.welcome");
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
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
         
      <div className="circle-container" style={{backgroundImage: `url(${url})`,
                                                backgroundSize: "11rem"}}>
        <div><p>Epoxy-Lackierung  </p></div> <div><p>Holzherstellung</p></div>
        <div><p>Logistik und Transport</p></div> <div><p>Montage und Service</p></div>
        <div><p>Neubau und Umbau Renovierungen</p></div> <div><p>Roll-Out Tours</p></div>
        <div><p>Metall- und Drahtherstellung</p></div>
      </div>
    </div>
  );
}

export default Home;
