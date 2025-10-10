import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Component/AppCard';

const Home = () => {
    const Apps = useLoaderData();
    console.log(Apps)
    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {
              Apps.map((app) => <AppCard app={app} ></AppCard>)
            }
           </div>
        </div>
    );
};

export default Home;