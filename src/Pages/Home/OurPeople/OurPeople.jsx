import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurPeople = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])
    return (
        <div>
            <div className='mb-10 md:mb-20'>
                <h1 data-aos="zoom-in" className='my-10 text-xl font-bold text-center md:text-4xl'>Our Users</h1>


                <div className='grid grid-cols-3 px-5 text-center md:grid-cols-6 justify-center gap-10'>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Web Developer</p>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Graphic Designer</p>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Banker</p>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Students</p>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Web Designer</p>
                    <p className='py-2 px-4 bg-[#f0f2f5] rounded hover:text-[#10b3d6] cursor-pointer'>Digital marketer</p>

                </div>


            </div>
        </div>
    );
};

export default OurPeople;