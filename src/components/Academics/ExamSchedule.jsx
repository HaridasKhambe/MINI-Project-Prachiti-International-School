import React, { useEffect } from 'react'


import Footer from '../Footer'
import { pdfData } from '../../constants/pdfData'

import { motion } from "framer-motion";

const ExamSchedule = () => {
    useEffect(() => {
        document.title = "Exam Schedule | JSPM College";
      }, []);
  return (
    <div>

      <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6'>
                  <div className=' justify-center text-center'>  {/* title heading */}
                        <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>Exam Schedule</h1>
                  </div>

                <div className='w-full h-full p-8 space-y-8 md:px-20'>   {/*libry content - start */}

                    <motion.div
                    initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
                    whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

                    className=''>  {/*INtroduction */}
                          <div className=''>  {/* title heading */}
                              <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Exam Overview</h2>
                          </div>
                          <div className='mt-2 justify-center text-justify'>
                                                <p>
                                                Our examination system is structured to assess students' knowledge, critical thinking, and problem-solving skills. It includes mid-semester and end-semester exams, along with continuous assessments through assignments, quizzes, and practical evaluations. The exams follow a transparent and standardized evaluation process to ensure academic excellence.
                                                </p>
                          </div>

                    </motion.div>

                    <motion.div 
                     initial={{ opacity: 0, y: 100 }} // Start hidden and slightly offset
                     whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
                     transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} // Fast, smooth animation

                    className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 md:px-10 mt-12'>
                         {/* mid sem  */}
                        <div className='bg-[var(--link-hover)] shadow-[0px_10px_15px_gray] md:w-1/2'> 
                            <div className='bg-[var(--primary-color)]'>  {/* title heading */}
                                <h2 className='flex  text-2xl text-white  font-medium  px-4 py-3 mb-4 justify-center'>Mid Semester Exam (MSE)</h2>
                            </div>

                            {pdfData.midSem.map((pdf) => (
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

                        </div>

                            {/* end sem  */}
                            <div className='bg-[var(--link-hover)] shadow-[0px_10px_15px_gray] md:w-1/2'>  
                            <div className='bg-[var(--primary-color)]'>  {/* title heading */}
                                <h2 className='flex  text-2xl  text-white  font-medium  px-4 py-3 mb-4 justify-center'>END Semester Exam (ESE)
                                </h2>
                            </div>

                            {pdfData.endSem.map((pdf) => (
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

                        </div>
                    </motion.div>

                  </div> {/*libry content - end*/}

            </div>
            <Footer/>

       
    </div>
  )
}

export default ExamSchedule
