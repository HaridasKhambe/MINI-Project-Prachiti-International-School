import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import {address} from '../constants/headerFooter.js'  //static data

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-white py-8">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-items-start md:justify-between md:items-start  md:text-left md:gap-x-4">
          {/* College Name */}
          <div className="mb-4 md:mb-0 space-y-2">
            <h2 className="text-4xl font-bold border-b-2 border-gray-400 inline-flex ">PRACHITI INTERNATIONAL SCHOOL</h2>
            <p className="text-sm text-gray-300">Empowering Education for the Future</p>
          </div>

          {/* Quick Links */}
          <div className="mb-4 md:mb-0 space-y-2">
            <h3 className="text-2xl font-semibold border-b-2 border-gray-400 inline-flex">Facilities</h3>
            <ul className=" text-md space-y-2">
              <li><Link to="/facilities/class-room" className="text-gray-300  hover:text-gray-400">Class Rooms</Link></li>
              <li><Link to="/facilities/library" className="text-gray-300 hover:text-gray-400">Library</Link></li>
              <li><Link to="/facilities/science-laboratory" className="text-gray-300 hover:text-gray-400">Science Laboratory</Link></li>
              <li><Link to="/facilities/internet" className="text-gray-300 hover:text-gray-400">Internet</Link></li>
              <li><Link to="/facilities/language-lab" className="text-gray-300 hover:text-gray-400">Language Lab</Link></li>
              <li><Link to="/facilities/art-craft-room" className="text-gray-300 hover:text-gray-400">Art and Craf tRoom</Link></li>
              <li><Link to="/facilities/medical-room" className="text-gray-300 hover:text-gray-400">Medical Room</Link></li>
            </ul>
          </div>

          {/* Contact Info */}  
          <div className="mb-4 md:mb-0 space-y-2">
            <h3 className="text-2xl font-semibold text-white-400 border-b-2 border-gray-400  inline-flex">Get In Touch</h3>
            <p className="text-md text-gray-300">{address[0].loc}</p>
            <p className="text-md text-gray-300">{address[0].state}</p>
            <p className="text-md text-gray-300">{address[0].con1}</p>
            <p className="text-md text-gray-300">{address[0].con2}</p>
            <p className="text-md text-gray-300">{address[0].con3}</p>
            <p className="text-md text-gray-300">{address[0].email}</p>
          </div>

          {/* Social Media */}
          <div className="self-end flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-md text-white mt-6 border-t border-gray-500 pt-4">
          © {new Date().getFullYear()} PRACHITI INTERNATIONAL SCHOOL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
