import React, { useState, useEffect } from 'react';
import { GoBell } from "react-icons/go";

const image = 'image/images.jpg';

const Header = ({ data }) => { 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [notificationCount] = useState(9); 
  const [selectedFilter, setSelectedFilter] = useState('all'); 
  const filters = ['all', 'category1', 'category2', 'category3']; 

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = debounce((term) => {
    if (term) {
      const results = data.filter(item =>
        item.toLowerCase().includes(term.toLowerCase()) &&
        (selectedFilter === 'all' || item.category === selectedFilter) 
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }, 300); 

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, selectedFilter]); 

  return (
    <header className='flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md rounded-lg'>
      <div className='mb-4 md:mb-0'>
        <h1 className='text-xl md:text-2xl font-bold text-gray-800'>Welcome Back</h1>
        <p className='text-lg md:text-xl font-semibold text-gray-600'>Olatunde</p>
      </div>
      <div className='flex flex-col md:flex-row items-center w-full md:w-auto'>
        <div className='relative mb-4 md:mb-0 md:mr-4 w-full md:w-64'>
          <input
            type="text"
            placeholder='Search....'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-indigo-100/30 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200'
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-2 top-2 text-gray-600 hover:text-gray-800 transition duration-200"
            >
              ✖️
            </button>
          )}
          {filteredData.length > 0 && (
            <div className='absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full shadow-lg'>
              {filteredData.map((item, index) => (
                <div key={index} className='py-2 px-4 hover:bg-indigo-100 cursor-pointer'>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='relative mb-4 md:mb-0 md:mr-4'>
          <select 
            value={selectedFilter} 
            onChange={(e) => setSelectedFilter(e.target.value)}
            className='bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-200'
          >
            {filters.map((filter, index) => (
              <option key={index} value={filter}>{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
            ))}
          </select>
        </div>
        <div className='flex items-center space-x-5'>
          <button className='relative text-2xl text-gray-600 hover:text-gray-800 transition duration-200'>
            <GoBell size={32} className='text-gray-600' />
            {notificationCount > 0 && (
              <span className='absolute top-0 right-0 mt-1 mr-1 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {notificationCount}
              </span>
            )}
          </button>
          <div className="relative">
            <img
              src={image}
              alt="User avatar"
              className='w-10 h-10 rounded-full object-cover border-2 border-gray-200 shadow-md'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
