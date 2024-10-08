import React, { useState } from 'react';

const clients = [
  {
    id: 1,
    name: "ABC Cooperative",
    title: "CEO",
    date: "2024-08-15",
    email: "ceo@abccoop.com",
  },
  {
    id: 2,
    name: "XYZ Company",
    title: "Marketing Director",
    date: "2024-08-15",
    email: "marketing@xyz.com",
  },
];

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Clients</h1>
      
      <div className="mt-4 mb-6 flex flex-col md:flex-row items-center">
        <input 
          type="text" 
          placeholder="Search Clients" 
          className="p-3 border border-gray-300 rounded-md mr-4 mb-4 md:mb-0 w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <div key={client.id} className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
              <h2 className="font-semibold text-lg text-gray-800">{client.name}</h2>
              <p className="text-gray-500 text-sm">{client.title}</p>
              <p className="text-gray-500 text-sm">Added on: {client.date}</p>
              <p className="text-blue-500 mt-2">{client.email}</p>
              <button 
                className="mt-2 text-indigo-600 text-sm font-medium underline" 
                onClick={() => {/* Open client details modal */}}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">No clients found.</p>
        )}
      </div>
    </div>
  );
};

export default Clients;
