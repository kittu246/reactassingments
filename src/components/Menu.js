import React,{useState} from "react";
import MenuCard from "./MenuCard";
import { categoryItems } from "../data";

const Menu =() =>{

    const [menuItems,setmenuItems] = useState(categoryItems);

    const filterData=(category) =>{

       if(category === "all"){
        setmenuItems(categoryItems);
       }
       else{
         const filteredList = categoryItems.filter((item) =>item.category === category)
         setmenuItems(filteredList);
       }
       
    } 

    // const setBreakFast=() =>{
       
    //     const breakFastList = categoryItems.filter((item) => item.category=="breakfast")
    //     setmenuItems(breakFastList);

    // }

    // const setLunch=() =>{
       
    //     const lunchList = categoryItems.filter((item) => item.category=="lunch")
    //     setmenuItems(lunchList);
        
    // }

    // const setDinner=() =>{
       
    //     const dinnerList = categoryItems.filter((item) => item.category=="dinner")
    //     setmenuItems(dinnerList);
        
    // }

    return(
        <div>
            <h1>My Menus</h1>
            <div className="menuHeading">
                <button onClick={() =>filterData("all")  }>All</button>
                <button onClick={() => filterData("breakfast")  }>BreakFast</button>
                <button onClick={() => filterData("lunch")  }>Lunch</button>
                <button onClick={() => filterData("dinner")  }>Dinner</button>
            </div>
            {
                
                    menuItems.map((item,index) =>{
                        return(
                         <MenuCard key={index} item={item}/>
                        )
                    })
                
            }
        </div>
    )
   



}

export default Menu ;