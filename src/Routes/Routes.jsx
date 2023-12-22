import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Errorpage from '../errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layouts/Dashboard';
import MyProfile from '../Pages/UserDashboard/MyProfile';
import NewTask from '../Pages/UserDashboard/NewTask';
import ToDo from '../Pages/UserDashboard/ToDo';
import ManageTask from '../Pages/UserDashboard/ManageTask';
import UpdateTask from '../Pages/UserDashboard/UpdateTask';
import PrivateRoute from './PrivateRoute';
import Membership from '../Pages/Home/Membership/Membership';
import Contact from '../Pages/Home/Contact/Contact';

const myCreatedRoutes  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/membership',
                element: <Membership></Membership>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
          
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
            {
                path: 'myprofile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'newtask',
                element: <NewTask></NewTask>
            },
            {
                path: 'todo',
                element: <ToDo></ToDo>,

            },
            {
                path: 'managetask',
                element: <ManageTask></ManageTask>,

            },
            {
                path: 'update-task/:id',
                element: <UpdateTask></UpdateTask>,

            },

        ]
    }
])

export default myCreatedRoutes ;