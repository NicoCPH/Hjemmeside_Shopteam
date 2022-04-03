

function Montage(props) {
    return (
        <div className="montage">
            <div className="montage_headline">
               <h1>{props.t("mounting.headline")}</h1> 
               <img src={require("../images/img-montage.jpg")} alt="" />
               </div>
            <section className="mid_center_section_montage">
                <h2>{props.t("mounting.h2")}</h2>
               <div className="center_text">
                       <p className="center_text_montage">
                        {props.t("mounting.centertext")}
                       </p> 
                </div>
            </section>
            <section>
            <div className="picture_grid_montage">
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
                <img src={require("../images/intro01_02.jpg")} alt="" />
            </div>
            

            </section>
            
            
            </div>
    );
}

export default Montage;