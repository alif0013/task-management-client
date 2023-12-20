import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../Layouts/MainLayouts';
import Errorpage from '../errorpage/Errorpage';
import Home from '../Pages/Home/Home';

const myCreatedRoutes  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default myCreatedRoutes ;