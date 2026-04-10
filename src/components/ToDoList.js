import React,{useState,useEffect, useContext} from "react";



const ToDoList =()=>{

    // const{cart,setcart} = useContext(cartContext);

    const [userVal,setUserVal] = useState("");
    const [listItem,setListItems] = useState([]);

   const addList =() =>{

    setListItems([...listItem,userVal])
    setUserVal("");
   }

   const deleteList =(index) =>{
    
    const newList = listItem.filter((item,i) => i != index);
    setListItems(newList);


   }

    return(
        <div className="golfgame">
            {/* {cart.map((item)=>(
                <p>{item.name}</p>
            ))} */}
            <h1>To Do List</h1>
            <div>
                <input  type="text" placeholder="enter Item" 
                onChange={(e)=>setUserVal(e.target.value) } value={userVal}/>
                <button onClick={addList}>Add Item</button>
            </div>
            <div>
                { listItem && (
                    listItem.map((item,index) =>{
                    return (
                        <div className="listitems" key={index}>
                        <p>{item}</p>
                        <button onClick={() =>deleteList(index)}>Delete</button>
                    </div>
                    )
                    
                })
                )
                }

            </div>
        </div>
    )

}

export default ToDoList;