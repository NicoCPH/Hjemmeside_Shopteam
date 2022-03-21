function Footer(props) {
    return (
        <div className="footer">
        <div className="footer_text">
        <div>{props.t("footer.name")}</div> 
        <div>Vestre Gade 6</div>
        <div>DK-2605 Broendby (by Copenhagen)</div>
        <div><a href="https://www.porsa.eu">Member of the PORSA Group</a></div>
        </div>
        </div>

    );
}

export default Footer