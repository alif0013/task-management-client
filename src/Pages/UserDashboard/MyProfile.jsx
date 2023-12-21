import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SlBadge } from "react-icons/sl";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useMyPost from '../../../hooks/useMyPost';

const MyProfile = () => {

    const { user } = useAuth()

    // const [myPost, refetch] = useMyPost()

    return (
        <div>
            <Helmet>
                <title>Dashboard | My Profile</title>
            </Helmet>

            <h2 className='text-4xl font-bold text-center mt-10'>My Profile</h2><hr className='border-2 mt-4 md:w-[400px] mx-auto' />

            <div className='flex justify-center mt-10 lg:mt-20'>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 mt-2 rounded-full shadow-lg" src={user?.photoURL} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {user?.displayName}</h5>
                        <div className="badge badge-info gap-2 my-1">
                            <SlBadge></SlBadge>
                            Bronze
                        </div>

                        <span className="text-sm text-gray-500 dark:text-gray-400">Email: {user?.email}</span>
                        <div className="flex mt-4 md:mt-6">
                            <Link to='/dashboard/newtask' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Task</Link>
                            <Link to='/dashboard/managetask' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">Manage Task</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;