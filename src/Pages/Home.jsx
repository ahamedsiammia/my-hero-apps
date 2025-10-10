import React from "react";
import { Link } from "react-router";
import AppCard from "../Component/AppCard";
import useApps from "./Hooks/useApps";
import { BiLogoPlayStore } from "react-icons/bi";
import { SiAppstore } from "react-icons/si";

const Home = () => {
  const { Apps, loading, error } = useApps();

  const featureedApps = Apps.slice(0, 8);

  return (
    <div>
      <div className="text-center mb-[50px]">
        <h1 className="text-6xl font-bold">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-gray-400">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-5 ">
          <Link to="https://play.google.com/store/games?hl=en"><button className="btn ml-10">{<BiLogoPlayStore />} Google Play</button></Link>
          <Link to="https://www.apple.com/app-store/"><button className="btn ml-10">{<SiAppstore />}App Store</button></Link>
        </div>
        <img src={} alt="" />
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featureedApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/Apps">
          <button className=" text-white bg-gradient-to-l from-[#9f62f2] to-[#632ee3] rounded-lg p-3">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
