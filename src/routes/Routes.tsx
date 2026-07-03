import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeComp from "../pages/home/HomeComp";




export const element = createBrowserRouter([
   {
    path: "/", element: <MainLayout />,
    children:[
        {
            path: "/", element: <HomeComp />,
        }
    ]
   }
])