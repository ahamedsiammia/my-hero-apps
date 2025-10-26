import React, { useEffect, useState } from "react";
import useApps from "./Hooks/useApps";
import AppCard from "../Component/AppCard";
import Loading from "./Loading";
import { Link } from "react-router";

const Apps = () => {
    const { Apps ,loading} = useApps();
    const [search,setSearch]=useState('');
    const [searching,setSearching]=useState(false);
    const [searchAppes,setSearchAppes]=useState(Apps);
    const term = search.trim().toLocaleLowerCase();
    // const searchAppes = search ? Apps.filter(App => App.title.toLocaleLowerCase().includes(term)): Apps
  useEffect(()=>{
    setSearching(true);
    const timer =setTimeout(() => {
      
      const filtered =search
    ?Apps.filter((app)=>app.title.toLocaleLowerCase().includes(term))
    :Apps;
    setSearchAppes(filtered);
    setSearching(false);
    }, 300);

    return () =>clearTimeout(timer);
  },[search,Apps,term]);
  return (
    <div>
      <div className="text-center mb-[50px]">
        <h1 className="text-5xl font-bold">Our All Applications</h1>
        <p className="text-gray-400 mt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl font-semibold"><span>({searchAppes.length})</span>Apps Found</h1>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
            value={search}
             onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      { searching ?(<Loading></Loading>):
       searchAppes.length > 0 ?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchAppes.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>:
      <div className="text-center">
       <h1 className="text-4xl font-bold"> No Apps Found</h1>
       <Link to="/">
          <button className=" mt-5 text-white bg-gradient-to-l from-[#9f62f2] to-[#632ee3] rounded-lg p-3">
            go home
          </button>
        </Link>
      </div>
      }
      {loading && <Loading></Loading>}
    </div>
  );
};

export default Apps;
