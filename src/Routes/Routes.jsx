import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Blog from "../Shared/Blog";
import Datail from "../Layout/Datail";
import ChefDegail from "../Shared/ChefDegail";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import Profile from "../Shared/Profile";
import PrivetRout from "../PrivetRoute/PrivetRout";
import ErrorPage from "../Shared/ErrorPage";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                
                loader: () => fetch('https://cook-website-server-safiislam.vercel.app/chefInfo')
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/profile',
                element: <PrivetRout><Profile /></PrivetRout>
            }
        ]
    },
    {
        path: '/chef',
        element: <Datail />,
        errorElement: <ErrorPage />,
        
        children: [
            {
                path: ':id',
                element: <PrivetRout><ChefDegail /></PrivetRout>,

                loader: ({ params }) => fetch(`https://cook-website-server-safiislam.vercel.app/chefInfo/${params.id}`)
            }
        ]
    }
])