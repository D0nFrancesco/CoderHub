import React from "react";
import { useRoutes } from 'react-router-dom';

// pages with lazy loading
const LandingPage = React.lazy(() => import('./pages/landing'));
const Register = React.lazy(() => import('./pages/register'));
const Login = React.lazy(() => import('./pages/login'));

const Routers = () => {
    let elements = useRoutes([
        {
            path: "/", 
            element: <LandingPage />
        },
        {
            path: "/register", 
            element: <Register />
        },
        {
            path: "/login", 
            element: <Login />
        },
    ]);

    return elements;
}

export default Routers;