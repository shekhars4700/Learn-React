import React from "react";
import  ReactDom from "react-dom"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
const MainApp = () => {
    return (
        <div>
    <Header/>
    <Body/>
    </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<MainApp/>)