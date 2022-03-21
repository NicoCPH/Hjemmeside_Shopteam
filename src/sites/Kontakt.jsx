
function Kontakt(props) {
    return (
        <div className="kontakt">
            <div className="kontakt_head">
                <h1 className="kontakt_titel">{props.t("contact.h1")}</h1>
            </div>
            <div className="kontakt_body">
                <div className="kontakt_body_left">
                    <p>{props.t("contact.p1")}</p>
                    <p>{props.t("contact.p2")}</p>
                    <p>{props.t("contact.p3")}</p>
                    
                    <div className="kontakt_body_countries_grid">
                        <div className="grid">
                            <ul>
                                <li>Denmark</li>
                                <li>Czech Republic</li>
                                <li>Russia</li>
                                <li>Poland</li>
                                <li>Germany</li>
                            </ul>
                        </div>
                        <div className="grid">
                            <ul>
                                <li>Spain</li>
                                <li>Portugal</li>
                                <li>Italy</li>
                                <li>Ukraine</li>
                                <li>Estonia</li>
                            </ul>
                        </div>
                        <div className="grid">
                            <ul>
                                <li>France</li>
                                <li>Romania</li>
                                <li>Bulgaria</li>
                                <li>Hungary</li>
                                <li>Latvia</li>
                            </ul>
                        </div>
                        <div className="grid">
                            <ul>
                                <li>Slovakia</li>
                            </ul>
                        </div>
                    </div>
                    <p>{props.t("contact.p4")}</p>
                    <div className="kontakt_body_address">
                    <p>Shop team International<br/>Vestre Gade 6<br/>DK-2605 Broendby (By Copenhagen)<br/>Denmark</p>
                    </div>
                    <div className="kontakt_body_contact">
                    <p>Tel: +45 3648 2121<br/>Handy: +45 2015 7811<br/>Fax: +45 3648 2323</p>
                    </div>
                </div>
                <div className="kontakt_body_right">
                    <iframe title="Google Maps" className="map" src=
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.724603636316!2d12.43559018095462!3d55.65899878062366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465256cba7410199%3A0x9a0d68c29fc71425!2sVestre%20Gade%206%2C%202605%20Br%C3%B8ndby!5e0!3m2!1sen!2sdk!4v1647449150214!5m2!1sen!2sdk" 
                        style= {{width:"100%",
                        height:"100%",
                        frameborder:"0",
                        style:"border:0",
                        allowfullscreen:"0",
                        tabindex:"0"}}>
                    </iframe>
                </div>

            </div>

        </div>
    );}

export default Kontakt

