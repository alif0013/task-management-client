import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
// import { CiCircleList } from "react-icons/ci";
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import { CiCircleList } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
// import useMyPost from '../../hooks/useMyPost';


const Dashboard = () => {
    // const [myPost] = useMyPost()




    return (
        <div className='md:flex'>
            <div className='md:48 md:min-h-screen lg:w-64 bg-green-400'>
                <ul className='menu p-5'>
                 
                            <>
                                <li className='bg-white my-2 rounded-lg'>
                                    <NavLink to="/dashboard/myprofile">
                                        <FcBusinessman className='text-xl'></FcBusinessman> My Profile
                                    </NavLink>
                                </li>
                                <li className='bg-white my-1 rounded-lg'>
                                    <NavLink to="/dashboard/newtask">
                                        <MdAdd className='text-xl'></MdAdd> New Task
                                    </NavLink>
                                </li>
                                <li className='bg-white my-1 rounded-lg'>
                                    <NavLink to="/dashboard/todo">
                                        <CiCircleList className='text-xl'></CiCircleList> To-Do
                                    </NavLink>
                                </li>
                                <li className='bg-white my-1 rounded-lg'>
                                    <NavLink to="/dashboard/managetask">
                                        <MdManageAccounts  className='text-xl'></MdManageAccounts> Manage Task
                                    </NavLink>
                                </li>
                                {/* <li className='bg-white my-2 rounded-lg'>
                                    <NavLink to="/dashboard/myPost">
                                        <CiCircleList className='text-xl'></CiCircleList> My Post ({myPost.length})
                                    </NavLink>
                                </li> */}
                            </>
                   
                    <div className="divider"></div>

                    <li className='bg-white my-2 rounded-lg'>
                        <NavLink to="/">
                            <FaHome className='text-xl'></FaHome>Home
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className='flex-1'>
                <Outlet></Outlet>
                <Toaster></Toaster>
            </div>

        </div>
    );
};

export default Dashboard;