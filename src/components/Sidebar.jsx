import React, { useState, useEffect } from 'react';
import { FaBox, FaUser, FaCalendar, FaSuitcase } from 'react-icons/fa';
import { LuMessageSquarePlus } from "react-icons/lu";
import { TbUsers } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

const logo = 'image/logo.webp';
const logo1 = 'image/lob.png';

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: FaBox },
    { id: 2, path: "/members", name: "Members", icon: TbUsers },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquarePlus },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: FaUser },
    { id: 6, path: "/works", name: "Works", icon: FaCalendar }
  ];

  useEffect(() => {
    const activeIndex = SIDEBAR_LINKS.findIndex(link => link.path === location.pathname);
    setActiveLink(activeIndex === -1 ? 0 : activeIndex);
  }, [location.pathname]);

  return (
    <div className={`fixed left-0 top-0 z-10 h-screen border-r bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'w-56' : 'w-16 md:w-56'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
        {isOpen ? 'Hide' : 'Show'} Menu
      </button>
      <div className='mb-8 flex'>
        <img src={logo} alt="logo" className='w-20 hidden md:flex rounded-full' />
        <img src={logo1} alt="logo" className='w-20 flex' />
      </div>
      <ul className='mt-6 space-y-6'>
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 transition duration-200 ease-in-out ${
              activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
            }`}
          >
            <Link
              to={link.path}
              className='flex justify-center md:justify-start items-center md:space-x-5'
              onClick={() => {
                setActiveLink(index);
                setIsOpen(false)
              }}
              aria-label={link.name}
            >
              <span>{React.createElement(link.icon)}</span>
              <span className={`text-sm text-gray-500 ${isOpen ? 'flex' : 'hidden'} md:flex`}>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
        <p className='flex items-center space-x-2 text-xs text-white py-5 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full'>
          <span>?</span> <span className={`hidden md:flex ${isOpen ? 'flex' : 'hidden'}`}>Need Help?</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
