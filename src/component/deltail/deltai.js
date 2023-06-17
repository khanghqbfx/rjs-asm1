import React from "react";
import "./deltai.css"
import {FaMapMarkerAlt} from "react-icons/fa"

const DelTail = (props) =>{
    
    return (
        <div>
            {props.items.map((item)=>(
               <div>
                 <div className="deltai-title">
                    <div className="deltai-one">
                       <h2>{item.name}</h2>
                       <div className="deltai-map">
                        <FaMapMarkerAlt  className="deltai-icon"></FaMapMarkerAlt>
                        <span>{item.address}</span>
                       </div>
                       <p className="deltai-distance">{item.distance}</p>
                       <p className="deltai-price">{item.price}</p>

                    </div>
                    <button type="text" className="deltai-btn">Resverse or Book Now</button>
                </div>
                <div className="deltai-img">
                    {item.photos.map((value) =>(
                     <img src={value} alt={value.title}></img>  
                    ))}
                </div>
                <div className="deltai-thee">
                    <div className="deltai-and">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="deltai-perfect">
                        <h5>Perfect of a 9-night stay</h5>
                        <p>Localter in the real heart  of Krakow ,this property  has an excellent Location score of 9.8!</p>
                        <span className="perfect-pice">${item.nine_night_price}</span>
                        <span className="perfect-night">(9 nights)</span>
                        <div>
                        <button type = "text" className="deltai-btn" > Resverse of Book Now</button>
                        </div>
                    </div>
                </div>



               </div>
            ))};
        </div>
    )

};
    
       

 export default DelTail