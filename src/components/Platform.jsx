import React from 'react';
import { FaApple, FaTabletAlt } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { CiGlobe } from 'react-icons/ci';

const Platform = () => {
  return (
    <div className='p-5 bg-white rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-700'>Platform</h1>
      <div className='p-2 grid grid-cols-2 gap-2'>
        <div className='space-y-3 text-gray-500'>
          <h1 className='text-2xl font-bold'>58</h1>
          <p className='flex items-center space-x-2'>
            <CiGlobe /><span>Website</span>
          </p>
        </div>
        <div className='space-y-3 text-gray-500'>
          <h1 className='text-2xl font-bold'>78</h1>
          <p className='flex items-center space-x-2'>
            <FaApple /><span>iOS</span>
          </p>
        </div>
        <div className='space-y-3 text-gray-500'>
          <h1 className='text-2xl font-bold'>58</h1>
          <p className='flex items-center space-x-2'>
            <DiAndroid /><span>Android</span>
          </p>
        </div>
        <div className='space-y-3 text-gray-500'>
          <h1 className='text-2xl font-bold'>58</h1>
          <p className='flex items-center space-x-2'>
            <FaTabletAlt /><span>Tablets</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Platform;
