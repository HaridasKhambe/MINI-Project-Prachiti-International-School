import React from "react";
import "./scollingNotices.css"

import { motion } from "framer-motion";

const VerticalMarquee = ({bordeTitle, boardData}) => {
   
    
      return (
        <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and slightly offset
        whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

        className="relative w-full md:w-[48%] lg:w-[32%] h-100 overflow-hidden bg-gray-50 rounded-lg shadow-md border border-gray-300 p-2">
            <div className="w-full h-14 flex items-center justify-center font-bold border-b bg-red border-[var(--primary-color)] ">
                <h2 className="text-black ">{bordeTitle}</h2>
            </div>
            <div className=" overflow-hidden">
                <div className="marquee-content space-y-4 py-2 ">
                    {boardData.map((event, index) => (
                    <div
                        key={index}
                        className="flex w-full bg-white rounded-md shadow-sm p-3 border border-gray-200"
                    >
                        {/* Left Section: Month & Date */}
                        <div className="w-1/4 flex flex-col items-center justify-center bg-[var(--primary-color)] text-white rounded-l-md p-3">
                        <span className="text-xl font-medium">{event.monthdate}</span>
                        <span className="text-3xl font-extrabold">{event.date}</span>
                        </div>
            
                        {/* Right Section: Title, Full Date, Description */}
                        <div className="w-3/4 p-3">
                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                        <p className="text-sm text-gray-500">
                            Event Date: {event.monthdate} {event.date}, {event.year}
                        </p>
                        <p className="justify-center text-sm text-black-700 mt-1 ">{event.description}</p>
                        </div>
                    </div>
                    ))}
                </div>

            </div>
          
        </motion.div>
      );
};

export default VerticalMarquee;