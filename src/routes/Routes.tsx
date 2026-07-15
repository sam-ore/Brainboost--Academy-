import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomeComp from "../pages/home/HomeComp";
import AboutUsComp from "../pages/AboutUs/AboutUsComp";
import EnrollComp from "../pages/enroll/EnrollComp";
import ContactComp from "../pages/contact/ContactComp";
import ServiceComp from "../pages/services/ServiceComp";




export const element = createBrowserRouter([
  
   {
    path: "/", element: <MainLayout />,
    children:[
        {path: "/", element: <HomeComp /> },
           { path: "AboutUs", element: <AboutUsComp />},
           { path: "enroll", element: <EnrollComp />},
           { path: "contact", element: <ContactComp />},
           { path:  "service", element: <ServiceComp />}
      
    ]
   }
])