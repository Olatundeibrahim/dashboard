import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from '../../public/image/images.jpg';
import image1 from '../../public/image/image1.png';
import image2 from '../../public/image/image2.png';

const Members = ({ members }) => {
  const [showLeads, setShowLeads] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800">Total Members</h1>
          <FaChevronRight className="text-gray-500 hover:text-gray-700 transition-colors duration-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative flex items-center">
                  <img src={image} alt="profile" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                  <img src={image1} alt="profile" className="w-14 h-14 rounded-full border-2 border-white shadow-md absolute -right-3" />
                  <img src={image2} alt="profile" className="w-14 h-14 rounded-full border-2 border-white shadow-md absolute -right-6" />
                </div>
                <div className="ml-4">
                  <p className="text-xl font-medium text-gray-800">{member.job}</p>
                  <span className="text-sm text-gray-500">Team Size: {member.total}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => setShowLeads(!showLeads)}
          >
            <h1 className="text-xl font-semibold text-gray-800">Team Leads</h1>
            {showLeads ? <FaChevronDown className="text-gray-500" /> : <FaChevronRight className="text-gray-500" />}
          </div>
          {showLeads && (
            <motion.div 
              className="mt-2 bg-gray-100 p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">Olatunde</p>
                <p className="font-medium">Ibrahim</p>
                <p className="font-medium">Olayinka</p>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis ipsam adipisci iste, deserunt laborum repudiandae nostrum quis ipsum in voluptatum quidem culpa iusto a sequi at libero earum hic.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;
