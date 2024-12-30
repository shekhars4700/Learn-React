import React, { lazy, Suspense } from "react";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurentMenuCard.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";

const MainApp = () => { 
    return (
        <div>
    <Header/>
    <Outlet/>
    </div>
    )
};
const About = lazy(()=> import("./components/About.js"))
 


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainApp/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/About",
                element: (
                    <Suspense fallback={<Shimmer/>}>
                        <About/>
                    </Suspense>
                )
            },
            {
                path:"/Profile",
                element: <Profile/>
            },
            {
                path:"/Contact",
                element: <Contact/>
            },
            {
                path:"/RestaurentMenu/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
    
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);