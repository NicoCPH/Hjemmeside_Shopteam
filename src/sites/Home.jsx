import React, { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
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
        <img src={require("../images/m1/Van for the team.jpg")} alt="" />
        <img src={require("../images/m1/IMG_7304.JPG")} alt="" />
        <img src={require("../images/m1/floor mounting 7.jpg")} alt="" />
      </div>
      <div className="welcome_text">{props.t("home.welcometext")}</div>
      <div className="circle-container" style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "11rem"
      }}>
        <Link to="/Epoxy"><div><p>Epoxy-Lackierung</p></div></Link>
        <Link to="/Epoxy"><div><p>Holzherstellung</p></div></Link>
        <Link to="/Epoxy"><div><p>Logistik und Transport</p></div> </Link>
        <Link to="/Epoxy"><div><p>Montage und Service</p></div></Link>
        <Link to="/Epoxy"><div><p>Neubau und Umbau Renovierungen</p></div> </Link>
        <Link to="/Epoxy"><div><p>Roll-Out Tours</p></div></Link>
        <Link to="/Epoxy"><div><p>Metall- und Drahtherstellung</p></div></Link>
        <Link to="/Epoxy"><div><p>Projekt management</p></div></Link>
      </div>
    </div>
  );
}

export default Home;
