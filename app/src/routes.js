import { useRoutes } from 'react-router-dom';

// pages
import LandingPage from './pages/landing';
import Register from './pages/register';
import Login from './pages/login';

const Routers = () => {
    let elements = useRoutes([
        {path: "/", element: <LandingPage />},
        {path: "/register", element: <Register />},
        {path: "/login", element: <Login />}
    ])

    return elements;
}

export default Routers;