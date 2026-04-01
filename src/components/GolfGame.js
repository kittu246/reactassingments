import React,{useState,useEffect} from "react";
import "../index.css"

const GolfGame =()=>{

    let [buttonClickHandler,setButtonClickHandler]= useState(false);
    let [ballPosition,setBallPosition] =useState(0);

    useEffect(()=>{

        const handleKeyDown =(e)=>{
            if(e.key == "ArrowRight"){
                console.log("moving right");
               setBallPosition(prev => prev+ 5) 
            }
        }
      
        
        window.addEventListener("keydown",handleKeyDown);
        return () => window.removeEventListener("keydown",handleKeyDown);

    },[])

    return(
        <div className="golfgame"  >
            {! buttonClickHandler ? <button onClick={() =>setButtonClickHandler(true) } className="start">Start</button> : <div style={{left:`${ballPosition}px`, position: "absolute"}} className="golf">

            </div>}
            
            

        </div>
    )

}

export default GolfGame;
