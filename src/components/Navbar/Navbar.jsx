import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect  } from "react";

import { RiMenu2Line } from "react-icons/ri"; // Importing Menu Icon
import { IoMdClose } from "react-icons/io"; //close


import collegeLogo from '../../assets/school-logo.png'

import Dropdown from './Dropdown'

import { header } from '../../constants/headerFooter';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

     // Example dropdown menu items and their paths
  const aboutUsDropdownItems = [
    'Vission & Mission',
    'Principal Message',
    'President Message',
  ];

  const aboutUsDropdownPaths = [
    '/about/vission', // Path for Vission & Mission
    '/about/principal-message', // Path for Principal Message
    '/about/president-message', // Path for President Message
  ];

  const facilityDropdownItems = [
    "Class Room",
    "Library",
    "Science Laboratory",
    "Internet",
    "Language Lab",
    "Art & Craft Room",
    "Medical Room",
  ];
  
  const facilityDropdownPaths = [
    "/facilities/class-room",
    "/facilities/library",
    "/facilities/science-laboratory",
    "/facilities/internet",
    "/facilities/language-lab",
    "/facilities/art-craft-room",
    "/facilities/medical-room",
  ];

const academicsDropdownItems = ["Curriculum", "Exam Schedule"];
const academicsDropdownPaths = ["/academics/curriculum", "/academics/exam-schedule"];

const gallarydropdownItems = ["Events", "Functions", "Academic Activities"];
const gallarydropdownPaths = ["/gallary/events", "/gallary/functions", "/gallary/academic-activities"];

// Inside the Navbar component
const [isSticky, setIsSticky] = useState(false);

// Add this useEffect inside the Navbar function
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <header className="bg-white-600 text-white shadow-md ">
      <div className="container mx-auto flex flex-col items-center p-4 gap-4 md:flex-row md:justify-center">
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <img src={collegeLogo} alt="College Logo" className="h-36 w-36" />
        </div>

        {/* Middle - College Name */}
        <div className="text-center text-[var(--primary-color)]">
          <p className="text-2xl font-extrabold">{header[0].host}</p>
          <p className='text-4xl font-medium mt-2'>{header[0].collegeName}</p>
          <p className='text-sm font-medium'>{header[0].subhead1}</p>
          <p className='text-sm font-medium'>{header[0].subhead2}</p>
        </div>
      </div>

    
      {/* Navigation Bar */}
      <nav className={`bg-[var(--primary-color)] h-14 w-full text-white shadow-md ${isSticky ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300' : ''}`}>
         {/* Mobile Menu Button */}
         <div className="flex items-center justify-between h-full px-4 w-18">
          <button
            className="md:hidden bg-[var(--link-hover)] text-black font-medium p-1 rounded "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose size={28} /> : <RiMenu2Line size={28} />}
          </button>
        </div>
       
          {/* Mobile Navigation Links */}
          <ul className={`md:hidden bg-[var(--primary-color)] flex flex-col text-left space-y-4 p-3 ${isOpen ? 'block' : 'hidden'} z-500 absolute w-full`}>
                    <li className=' py-3.5 hover:bg-[var(--link-hover)]'><Link to="/Home" className="py-4 px-2 font-medium text-lg text-white hover:text-[var(--primary-color)] ">Home</Link></li>
                    <Dropdown title="About Us" items={aboutUsDropdownItems} paths={aboutUsDropdownPaths} />
                    <Dropdown title="Academics" items={academicsDropdownItems} paths={academicsDropdownPaths} />
                    <Dropdown title="Facilities" items={facilityDropdownItems} paths={facilityDropdownPaths} />
                    <Dropdown title="Gallary" items={gallarydropdownItems} paths={gallarydropdownPaths} />
                    <li className=' py-3.5 hover:bg-[var(--link-hover)]'><Link to="/contactUs" className="py-4 px-2  font-medium text-lg text-white hover:text-[var(--primary-color)]">Contact Us</Link></li>
            </ul>

          {/* Desktop Navigation Links */}
        <ul className="hidden md:flex flex-wrap justify-center items-center space-x-4 p-3 -mt-17 z-500">
          <li className=' py-3.5 hover:bg-[var(--link-hover)]'><Link to="/Home" className="py-4 px-2 font-medium text-lg text-white hover:text-[var(--primary-color)] ">Home</Link></li>
          <Dropdown title="About Us" items={aboutUsDropdownItems} paths={aboutUsDropdownPaths} />
          <Dropdown title="Academics" items={academicsDropdownItems} paths={academicsDropdownPaths} />
          <Dropdown title="Facilities" items={facilityDropdownItems} paths={facilityDropdownPaths} />
          <Dropdown title="Gallary" items={gallarydropdownItems} paths={gallarydropdownPaths} />
          <li className=' py-3.5 hover:bg-[var(--link-hover)]'><Link to="/contactUs" className="py-4 px-2  font-medium text-lg text-white hover:text-[var(--primary-color)]">Contact Us</Link></li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar
