import React, { useEffect, useMemo, useState } from "react";

const ChildComponent =React.memo(({counter,setCounter}) =>{

    return <div>
        <button onClick={() =>setCounter(prev=>prev+1)}>{counter}</button>
    </div>

})





const TaskManagement=() =>{


    const [counter,setCounter] =useState(0);
    const[input,setInput] =useState("");
    const [task,setTask] =useState([]);

    useEffect(()=>{

        console.log("task Updated")

    },[task])

    const handleSubmit=(e) =>{

        e.preventDefault();
        if(input.length<5){
            alert("Task should be at least 5 characters");
            return;
        }
        setTask([...task,input]);
        setInput("");

    }

    const totaltask =useMemo(()=>task.length,[task])

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setInput(e.target.value) } value={input} />
                <button type="submit">Submit</button>

            </form>
            {task && task.map((item,index)=>{
              return(
               <div key={index}>
                <p>{item}</p>
               </div>

              )
            })}
            <ChildComponent counter={counter} setCounter={setCounter}/>
            <h4>{totaltask}</h4>
        </div>
    )


}

export default TaskManagement;