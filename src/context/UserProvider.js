import React, { useState } from "react";
import userContext from "./userContext";

const UserProvider =(props)=>{

    const [token,setToken] = useState("");

    return(
        <userContext.Provider value={{token,setToken}}>
            {props.children}
        </userContext.Provider>
    )


}

export default UserProvider;