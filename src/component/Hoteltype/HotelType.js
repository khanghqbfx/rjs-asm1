import React from "react";
import "./HotelType.css"


 const HotelType = (props) =>{
    return(
        <div>
            <div className="holtel-title">
                <h3> Borwre by property type</h3>
            </div>
            <div className="hotel-list">
                <ul>
                    {props.items.map((item) =>(
                        <li key = {item.id}>
                            <img src={item.image} alt={item.name}></img>
                            <div>
                                <h4>{item.name}</h4>
                                <span> {item.count}holtel</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
 }


 export default HotelType