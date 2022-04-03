
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



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


function Produktion(props) {

    return (
        <div className="prodution">
            <div className="poduction_headline">
               <h1>{props.t("production.headline")}</h1> 
               <img src={require("../images/img-montage.jpg")} alt="" />
               </div>
            <section className="mid_center_section">
                <h2>{props.t("production.h2")}</h2>
               <div className="center_text">
                       <p className="center_text_produktion">
                         {props.t("production.centertext")}
                       </p> 
                </div>
            </section>
            <section>
            <div className="picture_grid_produktion">
      <Swiper navigation={true} modules={[Navigation]}  className="mySwiper">
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