import React,{useState} from "react";

const MenuCard =({item}) =>{

    return(
        <div>
            <p>{item.category}</p>
            <p>{item.foodItem}</p>
        </div>
    )


}

export default MenuCard;