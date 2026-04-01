import React,{useRef} from "react";

const UncontrolledComponents =()=>{

     const passwordRef =useRef();

    const handleformSubmit =(e)=>{
         e.preventDefault();
         
          const password = passwordRef.current.value;

        const inputValue = document.querySelector("#nameInput").value;
       

       
        console.log("form Submitted Successfully")
        console.log(inputValue);
        console.log(password);
    }

    return(
        <form onSubmit={handleformSubmit}>
            <input type="text" id="nameInput" placeholder="enter name" />
            <input type="password" ref={passwordRef} id="passwordInput" placeholder="enter Password" />
            <button type="submit">Submit</button>
        </form>
    )

}

export default UncontrolledComponents;