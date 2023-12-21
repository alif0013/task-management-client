import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

     // sign out functionalities
     const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('you logged Out successfully');
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        } >Home</NavLink></li>

        <li><NavLink to='/dashboard' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#EC272E]" : ""
        }>Dashboard</NavLink></li>



    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='w-[100px] md:w-[120px]' src="https://i.ibb.co/P6vPT9d/logo111-removebg-preview.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>




            <div className="navbar-end">

                {/* <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Explore More</Link> */}

                {
            user ? <>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="profile" src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {user.displayName}
                                <span className="badge">New</span>
                            </a>

                        </li>
                        <li><Link to='/'>Settings</Link></li>
                        <li><a onClick={handleLogOut} >Logout</a></li>
                    </ul>
                </div>

            </>
                :
                <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Explore More</Link>
        }
            </div>
        </div>
    );
};

export default Navbar;