import React, { useContext } from "react";
import "./Banner.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { ContextApp } from "../../utils/Context";

function Banner() {
  const { value, setValue, searchResult } = useContext(ContextApp);

  return (
    <div className="banner">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="slider">
          <img
            src="https://images.unsplash.com/photo-1480374178950-b2c449be122e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img
            src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img
            src="https://images.unsplash.com/photo-1498122920496-ed9f9aab2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide className="slider">
          <img
            src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>

      <div className="content">
        <h3>Search and download any images within a second</h3>
        <span>
          <HiOutlineSearch
            cursor={"pointer"}
            fontSize={20}
            style={{ margin: "auto 5px" }}
          />
          <input
            type="text"
            placeholder="Search images"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={searchResult}
          />
        </span>
      </div>
    </div>
  );
}

export default Banner;
