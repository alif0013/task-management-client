
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether the animation should only happen once
        });

        AOS.refresh();
    }, [])

    return (
        <div>
        {/* contact banener */}
        <div className="hero mt-10 bg-[#f9f9f9] bg-gradient-to-r from-[#fef0ed] to-[#ecfaff]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl mt-10 font-bold">Contact Us</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>

        {/* contact info */}

        <div className="hero min-h-screen mt-16">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img data-aos="zoom-in" src="https://i.ibb.co/Npp2WJV/contact.jpg" className="max-w-sm md:max-w-lg" />
                <div>
                    <h1 data-aos="zoom-in" className="text-5xl font-bold">Get in Touch</h1>
                    <p className="py-6 text-[#808292]">Have a inquiry or some feedback for us? Fill out the form below to contact our team. For partnership and business development inquiries.</p>

                    {/* input field */}
                    <div>
                        <div class="mb-6">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div class="mb-6">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">your Email</label>
                            <input type="email" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="mb-6">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>


                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                        <button className='btn mt-5 bg-[#08A9E6] text-white'>Send Message</button>

                    </div>
                </div>
            </div>
        </div>


    </div>
    );
};

export default Contact;