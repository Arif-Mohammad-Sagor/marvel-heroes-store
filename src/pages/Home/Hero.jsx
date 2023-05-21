import React from 'react'
import banner1 from '../../assets/banner/banner-1.jpg';
import banner2 from '../../assets/banner/banner-2.jpg';
import banner4 from "../../assets/banner/banner-4.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-1 md:mt-8">
      <div className="md:w-2/5 w-full  md:rounded-l-md py-8 md:h-[450px] bg-slate-100 pl-8 flex justify-center items-center">
        <div className="">
          <p className="md:text-6xl text-2xl   leading-1 italic">
            {" "}
            Be a Super Hero
            <br /> to Save the Earth
          </p>
        </div>
      </div>
      {/* second half */}
      <div className="md:w-3/5">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={banner1} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img src={banner4} className="w-full h-[450px] rounded-md" />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img src={banner2} className="w-full h-[450px] rounded-md" />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-primary btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-primary btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-primary btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero