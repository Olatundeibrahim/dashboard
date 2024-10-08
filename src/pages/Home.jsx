import React from "react";
import ProjectStastics from "../components/ProjectStastics";
import Platform from "../components/Platform";
import Projectcard from "../components/Projectcard";
import Clientcard from "../components/Clientcard";
import Membercard from "../components/Membercard";

const Home = () => {
  const projects = [
    {
      name: "Website Redesign",
      type: "Web Development",
      date: "2024-08-10",
      members: ["ibrahim", "olatunde", "tunde"],
      file: 4,
      progress: 20,
    },
    {
      name: "Mobile App Development",
      type: "Mobile Application Development",
      date: "2024-08-10",
      members: ["ibrahim", "olatunde", "tunde"],
      file: 8,
      progress: 40,
    },
    {
      name: "Marketing Campaign",
      type: "Marketing",
      date: "2024-08-10",
      members: ["ibrahim", "olatunde", "tunde"],
      file: 6,
      progress: 40,
    },
    {
      name: "Product Launch",
      type: "Management",
      date: "2024-08-10",
      members: ["ibrahim", "olatunde", "tunde"],
      file: 4,
      progress: 20,
    },
  ];

  const members = [
    {
      total: 7,
      job: "Web Development",
    },
    {
      total: 6,
      job: "Mobile Application Development",
    },
    {
      total: 4,
      job: "Marketing",
    },
    {
      total: 9,
      job: "Management",
    },
  ];

  const clients = [
    {
      name: "ABC Cooperative",
      title: "CEO",
      date: "2024-08-15:09:00:002",
      file: ":009",
    },
    {
      name: "XYZ Company",
      title: "Marketing Director",
      date: "2024-08-15:09:00:03",
      file: ":003",
    },
    {
      name: "123 Industries",
      title: "Project Manager",
      date: "2024-08-15:0511:15:002",
      file: ":008",
    },
    {
      name: "Tech Innovations LTD",
      title: "CIO",
      date: "2024-08-15:15110:45:002",
      file: ":007",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ProjectStastics />
        <Platform />
        <ProjectStastics />
        <Platform />
      </div>

      <Section title="Current Projects" data={projects} CardComponent={Projectcard} />
      <Section title="Current Clients" data={clients} CardComponent={Clientcard} />
      <Section title="Members" data={members} CardComponent={Membercard} />
    </div>
  );
};

const Section = ({ title, data, CardComponent }) => (
  <div className="mt-8">
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm underline text-indigo-600 cursor-pointer">See All</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
      {data.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </div>
  </div>
);

export default Home;
