/*const heading = React.createElement("h1", {id:"heading"}, "Hello By using react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

//-------------------------------------------

// import React from "react"
// import ReactDOM from "react-dom"

// const parent = React.createElement("div", { id: "parent"},
//     React.createElement("div", { id: "child" },
//         [
//             React.createElement("h1", {}, "I am a h1 tag"),
//             React.createElement("h2", {}, "I am a h2 tag")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//----------------------------------------------------------------------------------------


// import React from "react"
// import ReactDOM from "react-dom"

// const jsxHeading = <h1 className="head" tabIndex="1">Hello By using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//----------------------------------------------------------------------------------------

//FUNCTIONAL COMPONENT

// import React from "react"
// import ReactDOM from "react-dom"

// const Title = () => <h1 className="head">This is title component</h1>;

// const Footer = () => {
//     return <h1 className="head">This is footer component</h1>;
// }

// const HeadingComponent = () => (

//     <div id="container">
//         <Title />

//         <h2 className="head" > Hello By using FUNCTIONAL COMPONENT</h2>

//         <Footer />

//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />)

//----------------------------------------------------------------------------------------

//inseting React Element in another React Element

// import React from "react";
// import ReactDOM from "react-dom"

// const elem = <span> React Element </span>

// const title = (
    
//     <h1 className="head" tabIndex="5">
        
//         This is title component
//     </h1>
// )

// const Heading = () => (
//     <div id="container">

//         {title}
//         <br/><span>{elem}</span>
//         <h2 className="head" > Hello By using FUNCTIONAL COMPONENT</h2>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Heading/>);

//----------------------------------------------------------------------------------------

import React from "react"
import ReactDOM from "react-dom/client"

import Header from "./components/Header"
import Body from "./components/Body"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"

const AppLayout = () => (

    <div className="app">
        <Header />
        <Body />
    </div>

)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    
    },
    {
        path : "/contact",
        element : <Contact />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);