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

import React from "react"
import ReactDOM from "react-dom"

const HeadingComponent = () => (
    <div>
        <h1 className="head" > Hello By using FUNCTIONAL COMPONENT</h1>
    </div>    
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)




