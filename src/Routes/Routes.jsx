const { createBrowserRouter } = require("react-router-dom");
const { default: HomeLayout } = require("../Layout/HomeLayout");



export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />
    }
])