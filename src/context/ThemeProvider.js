import React, { useState } from "react";
import themeContext from "./themeContext";

const ThemeProvider =(props)=>{

    const lightTheme ={
        color:"black",
        background:"white"
    }
    const darkTheme ={
        color:"red",
        background:"black"
    }

    const [theme,setTheme] =useState(lightTheme);

    return(
        <themeContext.Provider value={
            {
                theme,
                lightTheme:()=>setTheme({...theme,...lightTheme}),
                darkTheme:()=>setTheme({...theme,...darkTheme})
            }
        }>
            {props.children}

        </themeContext.Provider>

    )

}

export default ThemeProvider;