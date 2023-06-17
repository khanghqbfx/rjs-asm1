import React from "react";
import "./HotelGuss.css"


const HotelGuss = (props) => {
    return(
        <div>
            <div className="guss-title">
                <h3>Home Guests love</h3>
            </div>

            <div>
                <ul className="hotel">
                    {props.items.map((hotel) =>(
                         <div key={hotel.id} className="hotel-item" >
                        
                        <img src={hotel.image_url}  alt = {hotel.name}/>
                        
                         <div className="hotel-name" onClick={() => { window.location.href = "/detail" }} >{hotel.name}</div>
                         <div className="hotel-city">{hotel.city}</div>
                         <div className="hotel-price"> Starting from ${hotel.price}</div>
                         <div className="hotel-one">
                            <div className="hotel-rate">{hotel.rate}</div>
                            <span className="hotel-type">{hotel.type}</span>
                         </div>

                        
                     </div>
                    ))}
                </ul>
            </div>
        </div> 
)};







 export default HotelGuss