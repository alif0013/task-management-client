import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.svg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:min-h-[550px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="lg:max-w-lg" />
                    <div>
                        <h1 data-aos="zoom-in" className="text-3xl md:text-5xl font-bold">Welcome to My-Task Management System</h1>
                        <p className="py-6">This is a solution for everyone. Although it is at the heart of Scrum and is typically used by software development teams, it can be successfully applied to other businesses, as well as used for improving personal productivity.</p>
                        <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;