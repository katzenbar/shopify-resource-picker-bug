import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <div>Hello React!</div>,
    document.body.appendChild(document.createElement("div"))
  );
});
