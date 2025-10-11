import React, { useEffect, useState } from "react";
import InstaledApp from "../Component/InstaledApp";

const Installation = () => {
    const [Sort , setSort]=useState('');
  const [instaled, setInstaled] = useState([]);


  useEffect(() => {
    const installation = JSON.parse(localStorage.getItem("install"));
    if (installation) setInstaled(installation);
  }, []);

  const hendleSort = (type) =>{
    setSort(type)
    if(type === 'High to low'){
      return [...instaled].sort((a,b) => a.downloads-b.downloads)
        
    }
    else if(type === 'low to high'){
       return [...instaled].sort((a,b) => b.downloads-a.downloads) 
    }
    else{
        return instaled
    }
  }

  return (
    <div>
      <div className="text-center mb-[50px]">
        <h1 className="text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400 mt-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <h1 className="text-2xl font-semibold">
          <span>({instaled.length})</span>Apps Found
        </h1>
        <div>
          <details className="dropdown">
            <summary className="btn m-1"> {Sort ? Sort:"Sort By Size"}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 md:w-52 p-2 shadow-sm">
              <li>
                <a onClick={() =>  hendleSort("High to low")}>High to low</a>
              </li>
              <li>
                <a onClick={() => hendleSort("Low to high")}>Low to high</a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div>
        {instaled.map((instal) => (
          <InstaledApp key={instal.id} instal={instal}></InstaledApp>
        ))}
      </div>
    </div>
  );
};

export default Installation;
