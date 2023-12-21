import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Projects = () => {
    return (
        <div className='' id='projects'>
        <div data-aos="fade-up" className='mt-20 mb-10 md:mb-20 '>
           <h1 className='text-center text-2xl md:text-5xl'>Our Upcomming Projects</h1>
           {/* <hr className="hidden md:block w-[300px] mx-auto mt-5 border-2 border-purple-600" /> */}
       </div>

       <div className=''>
           <Swiper
               effect={'coverflow'}
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={'auto'}
               coverflowEffect={{
                   rotate: 50,
                   stretch: 0,
                   depth: 100,
                   modifier: 1,
                   slideShadows: true,
               }}
               pagination={true}
               modules={[EffectCoverflow, Pagination]}
               className="mySwiper"
           >
               <SwiperSlide>
                   <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/tapy-co-poster.jpg" />
                  
               </SwiperSlide>
               <SwiperSlide>
                   <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/tryotel-b2c-cover.jpg" />
               
      
               </SwiperSlide>
               <SwiperSlide>
                   <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/desktop.png" />
                
               </SwiperSlide>
               
               <SwiperSlide>
                   <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/swiper01_2.webp" />
                
               </SwiperSlide>
               
               <SwiperSlide>
                   <img src="https://raw.githubusercontent.com/alif0013/developer-portfolio/main/src/assets/swi6.jpg" />
              
               </SwiperSlide>
           </Swiper>
       </div>
   </div>
    );
};

export default Projects;