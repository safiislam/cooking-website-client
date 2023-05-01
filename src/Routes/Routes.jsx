import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Blog from "../Shared/Blog";






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
            }
        ]
    }
    {
        
    }
])