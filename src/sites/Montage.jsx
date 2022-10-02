import React from "react";

function Montage(props) {
    return (
        <div className="montage">
            <div className="montage_headline">
               <h1>{props.t("mounting.headline")}</h1> 
               <img src={require("../images//m1/lamp systems3.jpg")} alt="" />
               </div>
            <section className="mid_center_section_montage">
                <h2>{props.t("mounting.h2")}</h2>
               <div className="center_text">
                       <p className="center_text_montage">
                        {props.t("mounting.centertext")}
                       </p> 
                       <ul className="ul_montage"> 
                        <li>{props.t("mounting.first")}</li>
                        <li>{props.t("mounting.second")}</li>
                        <li>{props.t("mounting.third")}</li>
                        <li>{props.t("mounting.fourth")}</li>
                        <li>{props.t("mounting.fifth")}</li>
                        <li>{props.t("mounting.sixth")}</li>
                        <li>{props.t("mounting.seventh")}</li>
                        <li>{props.t("mounting.eight")}</li>
                        <li>{props.t("mounting.nine")}</li>
                        <li>{props.t("mounting.thenth")}</li>
                        <li>{props.t("mounting.eleventh")} </li>
                        <li>{props.t("mounting.twelveth")}</li>
                        <li>{props.t("mounting.thriteenth")}</li>
                        <li>{props.t("mounting.fourthteenth")}</li>
                        <li>{props.t("mounting.fiftheenth")}</li>
                        <li>{props.t("mounting.sixtheenth")}</li>
                     </ul>
                </div>
            </section>
            <section>
            <div className="picture_grid_montage">
                <img src={require("../images/m1/Mounting2.jpg")} alt="" />
                <img src={require("../images/m1/floor mounting 6.jpg")} alt="" />
                <img src={require("../images/m1/floor mounting8.jpg")} alt="" />
                <img src={require("../images/m1/mounting3.jpg")} alt="" />
                <img src={require("../images/m1/Mounting4.jpg")} alt="" />
                <img src={require("../images/m1/IMG_7756.JPG")} alt="" />
                <img src={require("../images/m1/plumming.jpg")} alt="" />
                <img src={require("../images/m1/mounting the shelves.jpg")} alt="" />
                <img src={require("../images/m1/IMG_7304.JPG")} alt="" />
                <img src={require("../images/m1/IMG_7658.JPG")} alt="" />
                <img src={require("../images/m1/Mounting5.jpg")} alt="" />
                <img src={require("../images/m1/IMG_7656.JPG")} alt="" />
            </div>
            

            </section>
            
            
            </div>
    );
}

export default Montage;