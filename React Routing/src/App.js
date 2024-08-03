import React from "react";
import  ReactDom from "react-dom"
import Header from "./components/Header.js"
import Body from "./components/Body.js"

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./components/About.js";


const MainApp = () => {
    return (
        <div>
    <Header/>
    <Body/>
    </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainApp/>

    },{
        path:"/About",
        element: <About/>
    }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);