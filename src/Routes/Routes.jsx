import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Blog from "../Shared/Blog";
import Datail from "../Layout/Datail";
import ChefDegail from "../Shared/ChefDegail";
import Login from "../Shared/Login";
import Register from "../Shared/Register";






export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />,
        children:[
            {
                path:'/',
                element: <Home />,
                loader: ()=> fetch('http://localhost:5000/chefInfo')
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },
    {
        path:'/chef',
        element: <Datail />,
        children:[
            {
                path:':id',
                element: <ChefDegail />,
                loader:({params})=> fetch(`http://localhost:5000/chefInfo/${params.id}`)
            }
        ]
    }
])