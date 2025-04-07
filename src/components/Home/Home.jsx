import React, { useEffect } from 'react'

import ImageSlider from './ImageSlider'
import NoticesEvents from './NoticesEvents'
import Footer from '../Footer'
import Notices from "./Notices.jsx"
import aboutImage from '../../assets/HomeImages/image-1.jpg'

import {events, notices,about} from '../../constants/home.js'  //static data

import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "Home | PIS";
  }, []);

  return (

    <div className='space-y-10'>
      <ImageSlider />

      <div className='flex flex-col md:flex-row justify-around w-full space-y-4 md:space-y-0 md:space-x-4'>

        <Notices
        bordeTitle={"Notices"} />
        <NoticesEvents bordeTitle={"Upcoming Events"} boardData={events} />

      </div>

      {/* in betweenn code  */}

      <div className='relative flex flex-col justify-items-start space-y-6 md:space-x-10 lg:px-20 m-6 md:space-y-0 md:flex-row md:justify-between'>
        <motion.div 
         initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
         whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
         transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} // Fast, smooth animation

        className='w-full md:w-1/2'> {/* content */}
            <div className=''>  {/* title heading */}
                <h2 className='text-3xl text-[var(--primary-color)] font-medium  pb-2 border-b-1 border-gray-300 '>WELCOME TO PRACHITI INTERNATIONAL SCHOOL</h2>
            </div>
            <div className='mt-2 justify-center text-justify'>
              <p>
                {about[0].desc}
              </p>
            </div>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, x: 100 }} // Start hidden and slightly offset
         whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
         transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} // Fast, smooth animation

        className='w-full md:w-1/2 flex'> {/* image */}
            <img src={aboutImage} className='w-full h-full object-cover rounded-lg shadow-md' alt="About RSCOE"/>

        </motion.div>

      </div>

      {/* in betweenn code -  end */}

      <Footer/>
   
    </div>
  )
}

export default Home
