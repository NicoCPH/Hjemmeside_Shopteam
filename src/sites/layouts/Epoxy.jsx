import "../../styles/layouts.css"
import {
    Link
  } from "react-router-dom";
  import React from "react";
function Epoxy(props) {
    return (
        <div className="montage">
            <div className="button_holder">
            <Link className="button_back" to="/">Back</Link>
            </div>
            <section className="mid_section_epoxy">
                <h2>Epoxy Gallery</h2>
               <div className="center_text">
                       <p className="center_text_montage">
                        {props.t("mounting.centertext")}
                       </p> 
                </div>
            </section>
            <section>
            <div className="picture_grid_montage">
                <img src={require("../../images/m1/Mounting2.jpg")} alt="" />
                <img src={require("../../images/m1/floor mounting 6.jpg")} alt="" />
                <img src={require("../../images/m1/floor mounting8.jpg")} alt="" />
                <img src={require("../../images/m1/mounting3.jpg")} alt="" />
                <img src={require("../../images/m1/Mounting4.jpg")} alt="" />
                <img src={require("../../images/m1/IMG_7756.JPG")} alt="" />
                <img src={require("../../images/m1/plumming.jpg")} alt="" />
                <img src={require("../../images/m1/mounting the shelves.jpg")} alt="" />
                <img src={require("../../images/m1/IMG_7304.JPG")} alt="" />
                <img src={require("../../images/m1/IMG_7658.JPG")} alt="" />
                <img src={require("../../images/m1/Mounting5.jpg")} alt="" />
                <img src={require("../../images/m1/IMG_7656.JPG")} alt="" />
            </div>
            

            </section>
            
            
            </div>
    );
}

export default Epoxy;