import React, { useContext, useEffect, useState } from "react";
import themeContext from "../context/themeContext";

const ThemeSwitcher =()=>{

    const {theme,lightTheme,darkTheme } =useContext(themeContext);

    const [currentTheme,setCurrentTheme] =  useState("lightMode");

    useEffect(()=>{

       let cStyle = localStorage.getItem("currentTheme") || "lightTheme";
       setCurrentTheme(cStyle);
       cStyle=="lightTheme"?darkTheme():lightTheme()

    },[])

    const handleThemeSwitch =()=>{

        
        currentTheme === "lightMode"?darkTheme(): lightTheme() ;
        let cStyle =currentTheme === "lightMode"?"darkMode":"lightMode" ;
        setCurrentTheme(cStyle);
        localStorage.setItem("currentTheme",cStyle);
    }

    return(
        <div style={{
            color:theme.color,
            background:theme.background
        }}>
            <p>My name is Kritika Burman</p>
            <p>Thank you for switch theme project</p>
            <button onClick={handleThemeSwitch}>
                {currentTheme =="lightMode"?"Switch to Dark Mode":"Switch to Light Mode"}
            </button>
        </div>
    )



}

export default ThemeSwitcher;