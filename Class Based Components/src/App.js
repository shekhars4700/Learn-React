import React from "react";
import  ReactDom from "react-dom"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurentMenuCard.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"

const MainApp = () => {
    return (
        <div>
    <Header/>
    <Outlet/>
    </div>
    )
};

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
                element: <About/>
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

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);