import React, { useEffect } from 'react'

import {vissionMission} from '../../constants/aboutUs.js'
import Footer from '../Footer.jsx'

import { motion } from "framer-motion";

const vission = () => {
  useEffect(() => {
    document.title = "Vission & Mission | PIS";
  }, []);
  return (
      <div>
          <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6'>
                <div className=' justify-center text-center'>  {/* title heading */}
                      <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>Vission & Mission</h1>
                </div>

            <div className='relative flex flex-col justify-items-start space-y-6 md:space-x-10 m-6 md:space-y-0 md:flex-row md:justify-between md:mx-25'>

                <motion.div 
                initial={{ opacity: 0, y: -100 }} // Start hidden and slightly offset
                whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation
                
                className='w-full md:w-1/2'> {/* vission */}
                    <div className=''>  {/* title heading */}
                        <h2 className='text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Vission</h2>
                    </div>
                    <div className='mt-2 justify-center text-justify'>
                      <p>
                      {vissionMission[0].vission}
                      </p>
                    </div>
                </motion.div>
        
                <motion.div 
                initial={{ opacity: 0, y: 100 }} // Start hidden and slightly offset
                whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

                className='w-full md:w-1/2'> {/* mission */}
                      <div className=''>  {/* title heading */}
                        <h2 className='text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Mission</h2>
                      </div>
                      <div className='mt-2 justify-center text-justify'>
                        <p>
                        {vissionMission[0].mission}
                        </p>
                      </div>
                  </motion.div>
              
            </div>
           
          </div>
            <Footer/>
      </div>

  )
}

export default vission
