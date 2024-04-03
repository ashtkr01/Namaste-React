import React from "react";
import ReactDom from "react-dom/client";

const heading1 = React.createElement(
    "h1",
    {
        id : "title"
    },
    "Heading 1 for the parcel"
);

const heading2 = React.createElement(
    "h1",
    {
        id : "title"
    },
    "Heading 2 for the parcel"
);

const root = React.createElement(
    "div",
    { 
        id : "container"
    },
    [heading1 , heading2]
    );

const mainRoot = ReactDom.createRoot(document.getElementById("root"));
mainRoot.render(root);