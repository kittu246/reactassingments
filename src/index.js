import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import UserProvider from "./context/UserProvider";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <BrowserRouter>
         <App/>
         </BrowserRouter>
        
    </UserProvider>
   
       
  
);