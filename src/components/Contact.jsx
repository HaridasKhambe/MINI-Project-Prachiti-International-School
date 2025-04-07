import React, { useEffect } from 'react'

import Footer from '../components/Footer'
import { address, contacts } from '../constants/headerFooter'

import { motion } from "framer-motion";

const Contact = () => {

    useEffect(() => {
      document.title = "Contact | PIS";
    }, []);

  return (
    <div>

      <div className='flex flex-col my-5 mx-4 md:mx-10 space-y-6 overflow-hidden'>
                  <div className=' justify-center text-center'>  {/* title heading */}
                        <h1 className='text-4xl text-[var(--primary-color)] font-medium  pb-2 border-b-3 border-[var(--golden-border-b)] '>Get in Touch</h1>
                  </div>

                <div className='grid md:grid-cols-2 gap-15 w-full h-full space-y-8 md:px-20 lg:px-40 '>   {/*contact - start */}

                      <motion.div
                        initial={{ opacity: 0, x: -100 }} // Start hidden and slightly offset
                        whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
                        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }} // Fast, smooth animation

                      className=''>  {/*College Address */}
                            <div className=''>  {/* title heading */}
                                <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>College Address</h2>
                            </div>
                            <div className='mt-8 justify-center text-justify  space-y-1 transition-transform duration-300 hover:scale-110 shadow-[0px_10px_30px_rgba(255,0,0,0.5)] p-4 bg-[var(--link-hover)]'>
                                              <p className="text-lg text-[var(--footer-bg)] font-bold">{address[0].name}</p>
                                              <p className="text-lg text-[var(--footer-bg)] font-bold ">{address[0].loc}</p>
                                              <p className="text-lg text-[var(--footer-bg)] font-bold">{address[0].state}</p>
                                              <p className="text-lg text-gray-600">{address[0].con1}</p>
                                              <p className="text-lg text-gray-600">{address[0].con2}</p>
                                              <p className="text-lg text-gray-600">{address[0].con3}</p>
                                              <p className="text-lg ">{address[0].email}</p>
                            </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: 100 }} // Start hidden and slightly offset
                        whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
                        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }} // Fast, smooth animation

                      className=''>  {/*Contact Information */}
                            <div className=''>  {/* title heading */}
                                <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Contact Information</h2>
                            </div>
                            <div className='mt-8 justify-center text-justify transition-transform duration-300 hover:scale-110 shadow-[0px_10px_30px_rgba(255,0,0,0.5)]'>  
                            {contacts.map((contact) => (
                                <div key={contact.id} className="p-4 bg-[var(--link-hover)] rounded-lg shadow-md box-border space-y-1">
                                  <h3 className="text-xl font-semibold text-[var(--primary-color)]">{contact.name}</h3>
                                  <p className=" text-[var(--footer-bg)] font-bold">{contact.position}</p>
                                  <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
                                  <p className="text-gray-600"><strong>Phone:</strong> {contact.phone}</p>
                                </div>
                              ))}
                            </div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 100 }} // Start hidden and slightly offset
                        whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
                        transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }} // Fast, smooth animation

                      className='md:col-span-2 '>  {/*Location Map */}
                            <div className=''>  {/* title heading */}
                                <h2 className='inline-flex text-2xl text-[var( --footer-bg)] font-medium  pb-2 border-b-2 border-[var(--golden-border-b)] '>Our Location</h2>
                            </div>
                            <div className='mt-2 justify-center text-justify w-full h-100 md:h-150 md:px-20'>
                            <iframe
                            className='max-w-full overflow-hidden'
                                title="Google Map"
                                style={{ width: "100%", height: "100%", border: "0" }}
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107877.79772230599!2d74.28566!3d20.981552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdef90cf4265781%3A0xd5caf8e71136ebc6!2sPRACHITI%20INTERNATIONAL%20SCHOOL%2C%20SAKRI!5e1!3m2!1sen!2sus!4v1740423277393!5m2!1sen!2sus"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            
                            </div>
                      </motion.div>


                  </div> {/*contact content - end*/}

            </div>
            <Footer/>

       
    </div>
  )
}

export default Contact
