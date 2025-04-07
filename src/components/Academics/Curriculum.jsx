import React, { useEffect } from 'react'


import Footer from '../Footer'
import { pdfData } from '../../constants/pdfData'

import { motion } from "framer-motion";

const Curriculum = () => {
  useEffect(() => {
    document.title = "Curriculum | JSPM College";
  }, []);
  return (
    <div>

      <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6'>
                  <div className=' justify-center text-center'>  {/* title heading */}
                        <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>Curriculum</h1>
                  </div>

                <motion.div 
                 initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
                 whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
                 transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

                className='w-full h-full p-8 space-y-8 md:px-20'>   {/*libry content - start */}

                    <div className=''>  {/*INtroduction */}
                          <div className=''>  {/* title heading */}
                              <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Curriculum Overview</h2>
                          </div>
                          <div className='mt-2 justify-center text-justify'>
                                                <p>
                                                Our curriculum is designed to provide a strong academic foundation with industry-relevant courses, hands-on training, and research opportunities. It ensures a perfect balance between theoretical knowledge and practical applications, preparing students for future challenges.
                                                </p>
                          </div>

                    </div>

                    <motion.div 
                    initial={{ opacity: 0, x: 200 }} // Start hidden and slightly offset
                    whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} // Fast, smooth animation

                    className='bg-[var(--link-hover)] shadow-[0px_10px_15px_gray] mt-12 md:mx-5 lg:mx-20 '>  {/*curriculum for download */}
                        <div className='bg-[var(--primary-color)]'>  {/* title heading */}
                              <h2 className='flex text-2xl text-white  font-medium  px-4 py-3 mb-4'>Download Curriculums</h2>
                          </div>

                          {pdfData.syllabus.map((pdf) => (
                            <div key={pdf.id} className='flex justify-between items-center border-b border-gray-400 px-4 pb-4 space-y-4 mt-2'>
                            <span className='text-lg font-bold text-black'>{pdf.name}</span>
                            <div className='space-x-4'>
                                {/* View PDF in new tab */}
                                <a href={pdf.file} target='_blank' rel='noopener noreferrer' className=' text-white bg-[var(--primary-color)] px-4 py-2 rounded-md'>
                                View
                                </a>
                                
                            </div>
                            </div>
                        ))}

                    </motion.div>

                  </motion.div> {/*libry content - end*/}

            </div>
            <Footer/>

       
    </div>
  )
}

export default Curriculum
