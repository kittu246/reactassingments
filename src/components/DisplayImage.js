import React from "react";

const DisplayImage =({data}) =>{

    return (
        <div>
            {data && data.map((item) =>(
                <img key={item.id} src={item.urls.thumb} alt={item.description} style={{"height" :"500px"}}/>
            ))}
        </div>
    )



}

export default DisplayImage;