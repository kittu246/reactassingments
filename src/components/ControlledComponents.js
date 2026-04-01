import React,{useState} from "react";

const ControlledComponents =()=>{

    const [value,setValue] = useState();

    const formSubmit=(e)=>{

        e.preventDefault();
        console.log("form Submitted");

    }

    return(
        <form onSubmit={formSubmit}>
            <label>Enter Name</label>
           
         <input type="text" placeholder="type name here" value={value} onChange={(e) =>setValue(e.target.value)}/>
        <button type="submit">Submit</button>
        </form>

    )
}

export default ControlledComponents;