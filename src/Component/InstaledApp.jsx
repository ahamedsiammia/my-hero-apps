import React from 'react';

const InstaledApp = ({instal}) => {
    const {image,title,downloads}=instal
    
    return (
        <div>

           <div className='bg-white shadow-md rounded-lg p-3 flex justify-between items-center mt-5'>
            <div className='flex space-x-5'>
                <img className='h-[80px] w-[80px] rounded-lg' src={image} alt="" />
                <div>
                    <h1   className='font-semibold'>Forest: {title}</h1>
                    <div  className='flex space-x-5 mt-5'>
                        <div className='flex items-center'>
                        <img className='h-[16px] w-[16px]'
                         src="https://i.ibb.co.com/9mKqzXh3/icon-downloads.png"alt=""/>
                        {downloads}
                        
                    </div>
                    <div className='flex items-center'>
                        <img className='h-[16px] w-[16px]'
                         src="https://i.ibb.co.com/DPBPRBxL/icon-ratings.png"alt=""/>
                        {downloads}
                        
                    </div>

                    </div>

                </div>
            </div>
            <div>
                <button className="btn bg-[#00D390] text-white">Uninstall</button>
            </div>
           </div>

        </div>
    );
};

export default InstaledApp;
