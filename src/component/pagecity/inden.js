import React from "react";

import "./style.css"

 const PageCity = (props) => {
    return(
        <div>
            <ul className="imglist">
            {props.items.map((item) => (
            <li key={item.id} >
             <img src={item.image} alt={item.name} />
            <div>
            <h4>{item.name}</h4>
            <span>{item.subText}</span>
            </div>
  </li>
))}

             </ul>
    
      </div>
      )
   
    
      
      

}


 export default PageCity