import React from "react";
import "./scollingNotices.css"

import { FaMicrophone } from "react-icons/fa6";

import { pdfData } from '../../constants/pdfData.js'

import { motion } from "framer-motion";

const VerticalMarquee = ({bordeTitle}) => {
   
    
      return (
        <motion.div 
        initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
        whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation
        
        className="relative w-full md:w-[48%] lg:w-[32%] h-100 overflow-hidden bg-gray-50 rounded-lg shadow-md border border-gray-300 p-2">
            <div className="w-full h-14 flex items-center justify-center font-bold border-b bg-red border-[var(--primary-color)] ">
                <h2 className="text-black ">{bordeTitle}</h2>
            </div>
            <div className=" overflow-hidden">
                <div className="marquee-content space-y-4 py-2 ">
                    {pdfData.notices.map((pdf)  => (
                    <div
                        key={pdf.id}
                        className="flex w-full bg-white rounded-md shadow-sm p-3 border border-gray-200 "
                    >
                        {/* Left Section:  */}
                        <div className="w-1/4 flex flex-col items-center justify-center">
                            <FaMicrophone className="text-white bg-[var(--primary-color)] rounded-full text-4xl p-5 box-content"/>
                        </div>
            
                        {/* Right Section: Title, Full Date, Description */}
                        <div className="w-3/4 p-3">
                            <div key={pdf.id} className='flex justify-between items-center px-4 pb-4 space-y-4 space-x-2 mt-2'>
                                <span className='text-md font-semibold text-gray-800'>{pdf.name}</span>
                                <div className='space-x-4'>
                                    {/* View PDF in new tab */}
                                    <a href={pdf.file} target='_blank' rel='noopener noreferrer' className=' text-white bg-[var(--primary-color)] px-4 py-2 rounded-md'>
                                    View
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
          
        </motion.div>
      );
};

export default VerticalMarquee;