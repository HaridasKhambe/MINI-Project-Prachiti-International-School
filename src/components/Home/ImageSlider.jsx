import React, { useRef } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css";

import image1 from '../../assets/HomeImages/HomeSlider/image-1.jpg'
import image2 from '../../assets/HomeImages/HomeSlider/image-2.jpg'
import image3 from '../../assets/HomeImages/HomeSlider/image-3.jpg'
import image4 from '../../assets/HomeImages/HomeSlider/image-4.jpg'
import image5 from '../../assets/HomeImages/HomeSlider/image-5.jpg'


const ImageSlider = () => {
    const images = [
        image1, image2, image3, image4,image5
    ];
    const swiperRef = useRef(null); // Create Swiper reference

  return (
    <div className=' relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mb-20'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable:true}}
        autoplay={{delay:3000}}
        loop={true}
        className='w-full h-full'
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
      >
        {images.map((img, index)=>(
            <SwiperSlide key={index}>
                <img
                    src={img}
                    alt={`Slide ${index+1}`}
                    className='w-full h-full max-h-full object-cover'
                />
            </SwiperSlide>
        ))}
    
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()} // Move to previous slide
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer"
      >
        ❮
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()} // Move to next slide
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider
