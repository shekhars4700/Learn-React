import React from "react";
import  ReactDom from "react-dom"

// React Element
const Title = ( <h1>
    Hello From title JSX
    </h1>)

const a = 1;

// React Components 
// Everything is a component in REACT
const HeadingComponent = () => (
    <div>
        {/* <Title/> */}
        {Title}
        <h1>Hello from Functional Component</h1>
    </div>
)
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(HeadingComponent() )