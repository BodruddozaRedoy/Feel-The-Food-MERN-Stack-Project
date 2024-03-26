import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // To get access to the routing functionality
  <BrowserRouter>  
  {/* To get access the context state and functions */}
    <StoreContextProvider>  
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
