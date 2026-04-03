import React, { useEffect, useState } from "react";
import axios from "axios";



const DataFetcher =()=>{

    const [data,setData] = useState([]);
    const [filterData,setFilterData] =useState([]);
    const [inputValue,setInputvalue] =useState("");
    const [loading,setLoading] = useState(false);

    // const apiData= async()=>{

    //     setLoading(true);

    //     try{

    //         const res= await axios.get("https://dummyjson.com/users");
    //         console.log(res.data.users);
    //         setData(res.data.users);


    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    //     finally{
    //         setLoading(false);

    //     }
        
    // }

    const dataFetching =()=>{

        setLoading(true);
        
         axios.get("https://dummyjson.com/users")
        // .then((res)=>res.json())
        .then((res)=>{
            setData(res.data.users)
            setFilterData(res.data.users)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false))


    }




 

    useEffect(()=>{

       dataFetching();


    },[])

    useEffect(()=>{

      const filteredData = data.filter((item)=> item.firstName.toLowerCase().includes(inputValue.toLowerCase()));
       setFilterData(filteredData);

    },[inputValue])

    return(

        
        <div>

            <input type="text" onChange={(e)=>setInputvalue(e.target.value)} value={inputValue} />

            {loading?<h1>Loading</h1> :<div>
                 {filterData.map((item,index) =>(
                <p key={index}>{item.firstName}</p>
            ))}
                </div>}
           
        </div>
    )

    


}

export default DataFetcher;