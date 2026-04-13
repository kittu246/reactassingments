import React, { useContext, useEffect, useState } from "react";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [joke, setJoke] = useState("");
  const { token, setToken } = useContext(userContext);
  const navigate = useNavigate();

  const getJoke = async () => {
    try {
      const res = await axios.get(
        "https://instagram-express-app.vercel.app/api/auth/zuku",
        {
          headers: {
            Authorization: `Bearer${token}`,
          },
        },
      );

      setJoke(res.data.data.joke);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const handleLogout =async()=>{

    try{
         const res = await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout",{
        headers:{
            Authorization:`Bearer${token}`
        }

        
    })

    setJoke("")
        
         setToken("")
        alert("User Logged Out Successfully")
         localStorage.removeItem("token")
        navigate("/login")
    }

    catch(err){
        console.log(err.message.data)
    }

   

  }

  useEffect(() => {
    if (!token) {
      let token_from_localStorage = localStorage.getItem("token");
      if (token_from_localStorage) {
        setToken(token_from_localStorage);
      } else {
        navigate("/login");
      }
    }
  },[]);

  useEffect(() => {
    getJoke();
  }, [token]);

  return <div>
   {joke && <p>{joke}</p>}
   <button onClick={handleLogout}>Logout</button>

  </div>;
};

export default Dashboard;
