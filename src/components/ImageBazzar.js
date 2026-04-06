import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayImage from "./DisplayImage";

const ImageBazzar =()=>{

    const [inputVal,setInputVal]= useState("");
    const [data,setData] =useState(null)

    console.log(process.env.REACT_APP_UNSPLASH_ACCESS_KEY);



    const fetchedData= async() =>{

        try{
             const res = await axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                Authorization:`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{
                query:inputVal || "random"
            }
            

        })

        console.log(res.data.results);

        setData(res.data.results);
        }

        catch(err){
            console.log(err);
        }

       

    }

    useEffect(()=>{

        fetchedData();

    },[])

    return(
        <div>
            <h1>Image Bazaar</h1>
            <input type="text" onChange={(e) =>setInputVal(e.target.value)}
            onKeyDown={(e) =>{
               if( e.key === "Enter"){
                 fetchedData();
               }
            }}
              value={inputVal}/>

            <DisplayImage data={data} />

        </div>
    )



}

export default ImageBazzar;