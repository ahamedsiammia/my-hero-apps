import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "./Hooks/useApps";
import { toast } from "react-toastify";
import { Bar, BarChart, CartesianGrid, Legend,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Loading from "./Loading";


const AppsDetailes = () => {
  const [disabled, setDisabled] = useState(false);
  const { id } = useParams();
  const appid = parseInt(id);
  const { Apps, loading} = useApps();
  if (loading) return <Loading></Loading>
  const App = Apps.find((app) => app.id === appid);
  const { image, downloads, title, ratingAvg, companyName, reviews, ratings,description } =
    App;

  const hendleAddtoInstallation = () => {
    setDisabled(true);
    toast(`${title} install successfull `);
    const existingList = JSON.parse(localStorage.getItem("install"));
    let updatedList = [];
    if (existingList) {
      updatedList = [...existingList, App];
    } else {
      updatedList.push(App);
    }
    localStorage.setItem("install", JSON.stringify(updatedList));
  };

  return (
    <div>
      <div className="md:flex border-b-1 border-gray-400 ">
        <div>
          <img className="h-[350px] w-[350px]" src={image} alt="" />
        </div>
        <div className="ml-[50px]">
          <div className="md:ml-10 ">
            <h1 className=" text-4xl font-bold">SmPlan:{companyName}</h1>
            <p className="mt-2">
              Developed by <span className="text-[#632EE3]">{title}</span>
            </p>
            <p className="border-b-1 border-b-gray-400 mt-8 "></p>
          </div>
          <div className="md:flex justify-around md:ml-5 mt-8">
            <div className="mt-5 md:mt-0">
              <img
                src="https://i.ibb.co.com/9mKqzXh3/icon-downloads.png"
                alt=""
              />
              <p>Downloads</p>
              <h1 className="font-bold text-5xl">{downloads}M</h1>
            </div>
            <div className="mt-5 md:mt-0">
              <img
                src="https://i.ibb.co.com/DPBPRBxL/icon-ratings.png"
                alt=""
              />
              <p>Average Ratings</p>
              <h1 className="font-bold text-5xl">{ratingAvg}</h1>
            </div>
            <div className="mt-5 md:mt-0">
              <img src="https://i.ibb.co.com/TDPnXv4n/icon-review.png" alt="" />
              <p>Reviews</p>
              <h1 className="font-bold text-5xl">{reviews}</h1>
            </div>
          </div>
          <div className="mt-11 md:ml-10">
            <button
              disabled={disabled}
              onClick={hendleAddtoInstallation}
              className="btn bg-[#00D390] text-white p-7"
            >
              {disabled ? "Installed" : "Install Now (291 MB)"}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Ratings</h1>
        <div className=" rounded-xl p-4 h-80">
       <ResponsiveContainer width="100%" height="100%">
      <BarChart
   
        data={ratings}
       
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend/>
        <Bar dataKey="count"  fill="#82ca9d"  />
        
      </BarChart>
    </ResponsiveContainer>
        </div>

      </div>

      <div >
        <h1 className="text-4xl font-bold mb-4">description</h1>
        <p className="text-gray-500">{description}</p>
      </div>

      
    </div>
  );
};

export default AppsDetailes;
