import React from "react";
import { Link } from "react-router";
import AppCard from "../Component/AppCard";
import useApps from "./Hooks/useApps";
import Banner from "../Component/Banner";
import Trusted from "../Component/Trusted";

const Home = () => {
  const { Apps, loading, error } = useApps();

  const featureedApps = Apps.slice(0, 8);

  return (
    <div>
        <Banner></Banner>

      <Trusted></Trusted>
      

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
