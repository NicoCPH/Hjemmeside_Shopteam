import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from "react";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={require("../images/intro01_02.jpg")}>

      </img>
    );
  };

  const HoverText = () => {
    return (
      <div>
        Hovering right meow!
        <span role="img" aria-label="cat">
          🐱
        </span>
      </div>
    );
  };

function Produktion() {
    const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
        <div className="prodution">
            <div className="poduction_headline">
               <h1>Produktion</h1> 
               <img src={require("../images/img-montage.jpg")} alt="" />
               </div>
            <section className="mid_center_section">
                <h2>Alt fra én hånd</h2>
               <div className="center_text">
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae officiis obcaecati veniam iste ea error repellat explicabo facilis ab? Deserunt ea repellendus ad vitae quo ullam at animi porro.
                       Numquam molestias fugiat est magni nam cum nesciunt ullam odit maxime illo iure, placeat laborum rem amet cupiditate, soluta ipsam quia consequuntur quisquam aut quibusdam veritatis hic? At, corrupti quis?
                       Impedit quam fugiat eius, iusto recusandae molestias dicta repellat nobis provident, eaque molestiae voluptates mollitia assumenda, maxime rem maiores quod quidem esse fugit ad placeat repudiandae est eveniet? Porro, dolores.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non pariatur at sed laboriosam assumenda ullam, tenetur exercitationem odit debitis id, sapiente numquam veritatis quisquam est maiores voluptatum placeat facilis?
                       Corporis labore laudantium impedit aliquam tenetur, a vitae! Modi iusto vel eum, est quidem ratione omnis doloribus eius culpa dolore placeat obcaecati beatae, magnam consequatur error, ea dolorem odit illum.
                       </p> 
                </div>
            </section>
            <section>
            <div className="picture_grid_produktion">
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
            <div>
                {/* Hover over this div to hide/show <HoverText /> */}
                <HoverableDiv
                handleMouseOver={handleMouseOver}
                handleMouseOut={handleMouseOut}
                />
                {isHovering && <HoverText />}
            </div>

            <div className="slider">
            <Carousel fade variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/intro01_02.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/img-montage.jpg")}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("../images/intro01_02.jpg")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            </div>
    );
}

export default Produktion;