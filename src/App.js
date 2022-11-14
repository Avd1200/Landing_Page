import Navbar from "./components/navbar/Navbar";
import BreadCrumb from "./components/breadcrumb/BreadCrumb";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

import "./App.css";

const Card = () => {
  return (
    <div className="card-box bg-gradient-to-r text-white from-[#FF864C] to-[#800080] w-full h-auto rounded-[20px] px-4 py-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-[16px]">Dhiraj Saxsena</p>
        <p className="font-normal text-[14px]">14 Sep,2022</p>
      </div>
      <div className="mt-2">
        <p className="text-[14px] ">Courses Enrolled(6)</p>
        <div className="flex flex-wrap gap-2 justify-start pl-5 mt-2">
          {["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"].map(
            (item) => (
              <div className="w-auto h-auto text-[14px] border-solid border rounded-[20px] text-center px-2 py-1 ">
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <p className="mt-8 text-[16px]">Referall Amount<span className="text-[24px] font-semibold ml-2">&#8377;185</span></p>
    </div>
  );
};

const App = () => {
  return (
    <div className="mb-10">
      <Navbar />
      <div className="main_section">
        <BreadCrumb />
        <div className="referall">
          <div className="box1">
            <p>Your Referral Code</p>
            <div className="referall_code">EDCH54</div>
          </div>
          <div className="box2">
            <p className="text-[#800080] text-sm">Wallet Balance</p>
            <p className="text-base">&#8377; 500</p>
          </div>
        </div>
        <div className="scroller mt-20">
          <p className="text-[#800080] text-xl font-semibold mb-5">
            Friends who enrolled<span className="text-[#626262]">(3)</span>
          </p>
          <Swiper
          spaceBetween={20}
          slidesPerView='auto'
          centeredSlides
          freeMode
          centeredSlidesBounds
          className="slider">
          <SwiperSlide style={{width: '41%',height: 'auto'}}><Card/></SwiperSlide>
          <SwiperSlide style={{width: '41%',height: 'auto'}}><Card/></SwiperSlide>
          <SwiperSlide style={{width: '41%',height: 'auto'}}><Card/></SwiperSlide>
          <SwiperSlide style={{width: '41%',height: 'auto'}}><Card/></SwiperSlide>
          </Swiper>
          <div className="smaller">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        <p className="text-[16px] text-[#800080] font-medium mt-10">Terms & Conditions</p>
      </div>
    </div>
  );
};

export default App;
