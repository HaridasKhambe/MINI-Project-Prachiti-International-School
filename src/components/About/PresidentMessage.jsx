import React, { useEffect } from 'react'

import { messages } from '../../constants/aboutUs'
import presidentImg from '../../assets/AboutUs/president.jpg'

import Footer from '../Footer'

import { motion } from "framer-motion";

const PresidentMessage = () => {
  useEffect(() => {
    document.title = "President Message | PIS";
  }, []);

  return (
    <div>
    <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6'>
          <div className=' justify-center text-center'>  {/* title heading */}
                <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>{messages[0].title2}</h1>
          </div>

      <motion.div 
      initial={{ opacity: 0, y: 100 }} // Start hidden and slightly offset
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation
      viewport={{ once: true, amount: 0 }}

      className='relative flex flex-col justify-items-start space-y-6 md:space-x-10 m-1 md:space-y-0 md:flex-row md:justify-between md:mx-10 bg-[var(--link-hover)] rounded-bl-[70px] rounded-tr-[70px] rounded-tl-2xl rounded-br-2xl p-8 md:p-15 border-l-4 border-b-4 border-[var(--primary-color)] text-[var(--primary-color)]'>
          <div className='w-full md:w-1/3 place-content-center'> {/* vission */}
              <div className=''>  {/* title heading */}
                  <img src={presidentImg} className='w-full h-full object-cover rounded-lg shadow-[0px_10px_30px_rgba(255,0,0,0.5)] transition-transform duration-300 hover:scale-110 ' alt="principal image"/>
              </div>
              <div className='mt-4 justify-center text-center font-bold'>
                <p> {messages[2].name}</p>
                <p> {messages[2].position} </p>
              </div>
          </div>
  
          <div className='w-full md:w-2/3'> {/* mission */}
                <div className='justify-center text-justify text-medium '>
                  <p className='fancy-text'>Dear Student's,</p>
                  <p className='fancy-text'>
                    {messages[2].msg}
                  </p>
                </div>
            </div>
      </motion.div>
     
    </div>
      <Footer/>
</div>


  )
}

export default PresidentMessage
