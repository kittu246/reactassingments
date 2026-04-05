import React, { useEffect, useState } from "react";
import axios from "axios";

const CityWeather =()=>{

    const [inputVal,setInputval] =useState('');
    const [fetchedData,setFetchedData] =useState(null);
    const key ="dc0300f63488e6ab4f312f318e94b0aa";

    const fetchWeatherData = async () => {

    

        try{

            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${key}`)
            setFetchedData(res.data);
            console.log(res.data);
        }
        catch(err){
            console.log(err);
        }
        
    }

    // useEffect(()=>{
    //    fetchWeatherData();
    // },[inputVal])

    return(
        <div>
            <input type="text" onChange={(e) =>setInputval(e.target.value)} value={inputVal}
            onKeyDown={(e) =>{
                if(e.key==="Enter"){
                    fetchWeatherData();
                }
            }}/>

            {

               fetchedData && (
                <div>
                    <p>{fetchedData.name}</p>
                     <p>{`${fetchedData.main.temp} F`} </p>
                    <p>{fetchedData.weather[0].description}</p>
                </div>
               )

            }


        </div>
    )

}


export default CityWeather;