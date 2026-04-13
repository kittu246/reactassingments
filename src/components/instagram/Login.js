import axios from "axios";
import React, { useContext, useState } from "react";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const Login =()=>{

    const [userInput,setUserInput] = useState({email:"",password:""});

   const {email,password} = userInput;

   const {setToken} =useContext(userContext);
   const navigate = useNavigate();

    const handleInput =(e)=>{

        let x = e.target.name;
        setUserInput({...userInput,[x]:e.target.value})


    }

    const handleSubmit = async(e)=>{

        e.preventDefault();
        if(!email ||!password ){
            alert("Enter all required fields");
            return;
        }
        
        else{

            try{

                const res = await axios.get("https://instagram-express-app.vercel.app/api/auth/login",{email,password})
                setToken(res.data.data.token);
                setUserInput({email:"",password:""});
                localStorage.setItem("token",res.data.data.token);
                alert("User logged In Successfully");
                navigate("/dashboard");


            }
            catch(err){

                console.log(err.response.data.message);

            }

        }


    }

    return(
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
               
                <input type="email" placeholder="Email" name="email" onChange={handleInput}/>
                <input type="text"  placeholder="Password" name="password" onChange={handleInput}/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Login;