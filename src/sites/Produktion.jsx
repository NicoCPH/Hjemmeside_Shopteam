import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { t } from 'i18next';

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={require("../images/intro01_02.jpg")}>
      </img>
    );
  };
//   <div className="slider">
//   <Carousel fade variant="dark">
//       <Carousel.Item>
//           <img
//           className="d-block w-100"
//           src={require("../images/intro01_02.jpg")}
//           alt="First slide"
//           />
//           <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//           <img
//           className="d-block w-100"
//           src={require("../images/img-montage.jpg")}
//           alt="Second slide"
//           />

//           <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//           <img
//           className="d-block w-100"
//           src={require("../images/intro01_02.jpg")}
//           alt="Third slide"
//           />

//           <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//           </Carousel.Caption>
//       </Carousel.Item>
//       </Carousel>
//   </div>
  const HoverText = () => {
    return (
    <div>Hejsa</div>
    );
  };

function Produktion(props) {
    const [isHovering, setIsHovering] = useState(true);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
        <div className="prodution">
            <div className="poduction_headline">
               <h1>{props.t("production.headline")}</h1> 
               <img src={require("../images/img-montage.jpg")} alt="" />
               </div>
            <section className="mid_center_section">
                <h2>{props.t("production.h2")}</h2>
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
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/img-montage.jpg")} alt="" /><div className='swiper-slide-container'>Epoxy</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/intro01_02.jpg")} alt="" /><div className='swiper-slide-container'>Wood Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/img-montage.jpg")} alt="" /><div className='swiper-slide-container'>Metal Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>
                      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/intro_small01.jpg")} alt="" /><div className='swiper-slide-container'>CNC Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/intro03_01.jpg")} alt="" /><div className='swiper-slide-container'>Steel Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/4fbb0cb729.jpg")} alt="" /><div className='swiper-slide-container'>Cobber Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/0de281a6fa.jpg")} alt="" /><div className='swiper-slide-container'>Iron Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/img-montage.jpg")} alt="" /><div className='swiper-slide-container'>Paint Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img className='first_slider_image' src={require("../images/68bc4f8616.jpg")} alt="" /><div className='swiper-slide-container'>Metal Production</div></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
        <SwiperSlide><img src={require("../images/intro01_02.jpg")} alt="" /></SwiperSlide>
      </Swiper>
            </div>
            </section>
            

            
            </div>
    );
}

export default Produktion;