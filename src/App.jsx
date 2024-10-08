import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Members from './pages/Members';
import Messages from './pages/Messages';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Works from './pages/Works';

const App = () => {
  const membersData = [
    { total: 7, job: "Web Development" },
    { total: 6, job: "Mobile Application Development" },
    { total: 4, job: "Marketing" },
    { total: 9, job: "Management" },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="members" element={<Members members={membersData} />} />
            <Route path="messages" element={<Messages />} />
            <Route path="projects" element={<Projects />} />
            <Route path="clients" element={<Clients />} />
            <Route path="works" element={<Works />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
