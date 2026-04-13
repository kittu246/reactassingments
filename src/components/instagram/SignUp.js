import axios from "axios";
import React, { useContext, useState } from "react";
import userContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const SignUp =()=>{

    const [userInput,setUserInput] = useState({name:"",email:"",password:"",confirmPassword:""});

   const {name,email,password,confirmPassword} = userInput;

   const {setToken} =useContext(userContext);
   const navigate = useNavigate();

    const handleInput =(e)=>{

        let x = e.target.name;
        setUserInput({...userInput,[x]:e.target.value})


    }

    const handleSubmit = async(e)=>{

        e.preventDefault();
        if(!name ||!email ||!password ||!confirmPassword){
            alert("Enter all required fields");
            return;
        }
        else if(password !== confirmPassword){
            alert("Mismatch password and confirmPassword");
            return;
        }
        else{

            try{

                const res = await axios.get("https://instagram-express-app.vercel.app/api/auth/signup",{name,email,password,confirmPassword})
                setToken(res.data.data.token);
                setUserInput({name:"",email:"",password:"",confirmPawword:""});
                localStorage.setItem("token",res.data.data.token);
                alert("user registered Successfully");
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
                <input type="text" placeholder="Name" name="name" onChange={handleInput}/>
                <input type="email" placeholder="Email" name="email" onChange={handleInput}/>
                <input type="text" placeholder="Password" name="password" onChange={handleInput}/>
                <input type="text" placeholder="Confirm Password" name="confirmPassword" onChange={handleInput}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default SignUp;