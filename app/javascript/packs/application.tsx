import "@shopify/polaris/styles.css";

import React from "react";
import ReactDOM from "react-dom";
import ProductPage from "../components/ProductPage";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ProductPage />,
    document.body.appendChild(document.createElement("div"))
  );
});
