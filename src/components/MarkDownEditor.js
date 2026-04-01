import React, { useEffect, useState } from "react";

// Mistaked done
// ✅ Convert Markdown → HTML
// ✅ Show live preview
// ✅ Proper two-way binding
// ✅ Use useEffect meaningfully

const MarkDownEditor =()=>{

    const [input,setInput] =useState("");
    const [preview,setPreview] =useState("");
    const formatedtext =(text)=>{

        let formatted = text
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>")
      .replace(/\n/g, "<br />");

    return formatted;

    }
    useEffect(()=>{

       setPreview(formatedtext(input));



    },[input])
   

    return(
        <div>
            <div>
                <textarea type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
            <div>
                   <h3>{preview}</h3>
            </div>
        </div>
    )

};

export default MarkDownEditor;