import React, { useEffect } from 'react'

import {facilitiesData} from '../../constants/facilities.js' 
import Footer from '../Footer.jsx'

import { motion } from "framer-motion";

const ArtCraftRoom = () => {
  useEffect(() => {
    document.title = "Art & Craft | JSPM College";
  }, []);
  return (
    <div>
        
      <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6'>
            <div className=' justify-center text-center'>  {/* title heading */}
                  <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>Art And Craft Room</h1>
            </div>

           <motion.div 
             initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
             whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
             transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

           className='w-full h-full p-8 space-y-8 md:px-20'>   {/*libry content - start */}

              <div className=''>  {/*INtroduction */}
                    <div className=''>  {/* title heading */}
                        <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Introduction</h2>
                    </div>
                    <div className='mt-2 justify-center text-justify'>
                                          <p>
                                         {facilitiesData.artCraftRoom.intro}
                                          </p>
                    </div>

              </div>

              <motion.div
              initial={{ opacity: 0, y: 100 }} // Start hidden and slightly offset
              whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }} // Fast, smooth animation

              className='bg-[var(--link-hover)] rounded-bl-[70px] rounded-tr-[70px] rounded-tl-2xl rounded-br-2xl p-6'
              >  {/*images */}
                  <div className=''>  {/* title heading */}
                        <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Spaces/Facilities</h2>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-4 lg:px-30'>
                  {facilitiesData.artCraftRoom?.images?.length > 0 && facilitiesData.artCraftRoom.images.map((item, index) => (
                    <div key={index} className=" rounded-lg shadow-[0px_2px_14px_gray] transition-transform duration-300 hover:scale-110  hover:shadow-[0px_10px_30px_rgba(255,0,0,0.5)] bg-white">
                      <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                      <p className="text-center font-medium text-lg text-[var(--primary-color)] my-4 p-2 box-border">{item.name}</p>
                    </div>
                  ))}
                  </div>

              </motion.div>

            </motion.div> {/*libry content - end*/}

      </div>
      <Footer/>

    </div>
  )
}

export default ArtCraftRoom
