import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router';



const AppCard = ({app}) => {
    const {image,title,downloads,ratingAvg,id}=app;
    return (
        <div>
            <Link to={`/AppsDetailes/${id}`}>
            <div  className='bg-green-100 shadow-sm hover:scale-105 transition ease-in-out p-4'>
                <div className='h-[316px] overflow-hidden'>
                <img className='w-full h-full object-cover rounded-xl' src={image} alt="" />
            </div>
            <div className='p-4'>
                <h1>{title}</h1>
            </div>
            <div className='flex justify-between items-center px-4 mb-4'>
                <div className='badge bg-[#F1F5E8] text-[#00D390]'>
                    <PiDownloadSimple className='w-[16px] h-[16px] text-[#54CF68]'></PiDownloadSimple>
                    {downloads}
                </div>
                <div className='badge bg-[#FFF0E1] text-[#FF8811]'>
                    <FaStar className='w-[16px] h-[16px] text-[#FF8811]'></FaStar>
                    {ratingAvg}
                </div>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default AppCard;
