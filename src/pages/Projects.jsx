import React, { useState } from 'react';
import ProjectCard from '../components/Projectcard'; 

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-08-10",
    members: ["Alice", "Bob"],
    file: 4,
    progress: 20,
  },
  {
    id: 2,
    name: "Mobile App Development",
    type: "Mobile Application Development",
    date: "2024-08-12",
    members: ["Alice", "Charlie"],
    file: 8,
    progress: 40,
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriterion, setSortCriterion] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProjects = filteredProjects.sort((a, b) => {
    let compareA;
    let compareB;

    if (sortCriterion === 'name') {
      compareA = a.name.toLowerCase();
      compareB = b.name.toLowerCase();
    } else if (sortCriterion === 'date') {
      compareA = new Date(a.date);
      compareB = new Date(b.date);
    } else {
      compareA = a.progress;
      compareB = b.progress;
    }

    return sortOrder === 'asc' ? compareA < compareB ? -1 : 1 : compareA > compareB ? -1 : 1;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Projects</h1>
      
      <div className="mt-4 mb-6 flex flex-col md:flex-row items-center">
        <input 
          type="text" 
          placeholder="Search Projects" 
          className="p-3 border border-gray-300 rounded-md mr-4 mb-4 md:mb-0 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="border border-gray-300 rounded-md mr-4 mb-4 md:mb-0 p-2 w-1/3"
          value={sortCriterion}
          onChange={(e) => setSortCriterion(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
          <option value="progress">Sort by Progress</option>
        </select>
        
        <select 
          className="border border-gray-300 rounded-md mr-4 mb-4 md:mb-0 p-2 w-1/3"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.length > 0 ? (
          sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
