import React from 'react';
import Navber from '../Component/Navber';
import { NavLink } from 'react-router';

const DetailError = () => {
    return (
        <div>
             
      <div className="flex justify-center mt-[100px]">
        <img src="https://i.ibb.co.com/F4Lp01fs/App-Error.png" alt="" />
      </div>

      <div className="text-center mt-[100px]">
        <h1 className="text-5xl font-bold">Oops, page not found!</h1>
        <p className="text-gray-400 mt-5">
          The page you are looking for is not available.
        </p>
      </div>
      <div className="navbar-end text-white ml-10">
          <NavLink to="/">
            <button className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] rounded-lg p-2">
              Go Back!
            </button>
          </NavLink>
        </div>
        </div>
    );
};

export default DetailError;