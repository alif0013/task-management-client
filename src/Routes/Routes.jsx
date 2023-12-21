import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Errorpage from '../errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default myCreatedRoutes ;