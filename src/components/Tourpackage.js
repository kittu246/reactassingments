import React, { useEffect, useState } from "react";

const TourPackage =()=>{

    const [tours,setTours] =useState([]);
    const [loading,setLoading]= useState(false);
    const [expand,setExpand] =useState({});// take initial value as object because we need to take id 
    // and toggle it's value as true or false
   

    const handleTours =()=>{
        setLoading(true);
        fetch("https://dummyjson.com/quotes")
        .then(res =>res.json())
        .then(data =>{
            console.log(data.quotes)
            setTours(data.quotes)})
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false));
    }

    const handleDelete=(id)=>{

        // const filteredData = tours.filter((item)=>item.id!=id);
        // setTours(filteredData);
        setTours((prev) => prev.filter((item)=>item.id !== id));
        setExpand((prev) => {
            const newState ={...prev};
            delete newState[id];
            return newState;
        })

    }

    // initial value of prev[id] is false because there is no value for expand.id = undefined 
    // and in js undefined is false

    const handleExpansion=(id)=>{

        setExpand((prev) =>(
            {...prev,[id]: !prev[id]}
        ))

    }

    

    useEffect(()=>{
    handleTours();


    },[])

    return(
        <div>
            {loading?<h1>Loading...</h1> :<div>
                {!tours.length?<div><h1>No Tours Left</h1>
                <button onClick={handleTours}>Refresh</button>
                </div>:<div>
                    <h1>Tours</h1>
            <div>
                {tours && tours.map((item,index)=>{
                    return(
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <p>{item.author}</p>
                            <p>{expand[item.id]?item.quote:item.quote.split(" ").slice(0,10).join(" ")+"..."}
                                
                                <button onClick={()=>handleExpansion(item.id)}>{expand[item.id]?"collapse":"expand"}</button>
                            </p>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                       </div>
                    )
                })}
            </div>
                    </div>}
                
                </div>}
            
            
        </div>
    )


};



export default TourPackage;