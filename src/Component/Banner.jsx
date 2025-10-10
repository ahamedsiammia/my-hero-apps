import React from 'react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { SiAppstore } from 'react-icons/si';

const Banner = () => {
    return (
             <div className="text-center">
        <h1 className="text-6xl font-bold">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-400 mt-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-5 flex justify-center">
          <div> <a href="https://play.google.com/store/games?hl=en" target="blank" > <button className="btn ml-10 text-2xl p-8">{<BiLogoPlayStore className="text-[#47BCFF] text-3xl" />} Google Play</button> </a></div>
          
          <div> <a href="https://www.apple.com/app-store/" target="blank"> <button className="btn ml-10  text-2xl p-8">{<SiAppstore className="text-[#47BCFF] text-3xl" />}App Store</button> </a></div>
        </div>
        <div className="flex justify-center mt-10">
            <img  src="./hero.png" alt="" />
        </div>
        
      </div>
    );
};

export default Banner;