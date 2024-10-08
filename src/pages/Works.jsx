import React, { useState } from 'react';

const works = [
  {
    id: 1,
    title: "Website Redesign",
    type: "Web Development",
    date: "2024-08-10",
    progress: 70,
  },
  {
    id: 2,
    title: "Mobile App Development",
    type: "Mobile Application",
    date: "2024-08-15",
    progress: 40,
  },
];

const Works = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorks = works.filter(work =>
    work.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Works</h1>
      
      <div className="mb-6 flex items-center">
        <input 
          type="text" 
          placeholder="Search Works" 
          className="p-2 border border-gray-300 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105">
          Add New Work
        </button>
      </div>

      <div className="space-y-4">
        {filteredWorks.map((work) => (
          <div 
            key={work.id} 
            className="p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900">{work.title}</h2>
            <p className="text-gray-600 text-sm">{work.type}</p>
            <p className="text-gray-600 text-sm">Started on: {work.date}</p>
            <div className="mt-2">
              <div className="bg-gray-300 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${work.progress}%` }} 
                />
              </div>
              <p className="text-sm text-gray-600">{work.progress}% Complete</p>
            </div>
            <button className="mt-2 text-indigo-600 text-sm underline hover:text-indigo-800 transition-colors">
              View Details
            </button>
          </div>
        ))}
        {filteredWorks.length === 0 && (
          <p className="text-gray-500">No works found.</p>
        )}
      </div>
    </div>
  );
};

export default Works;
