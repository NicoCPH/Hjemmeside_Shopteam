
function Home(props) {
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
    <img src={require("../images/circles_gray_v4.png")} alt="" />
  </div>

    </div>
  );
}

export default Home;
