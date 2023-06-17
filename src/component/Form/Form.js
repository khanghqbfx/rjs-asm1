 import React from "react";
 import "./Form.css"

 const FormHotel =  (props) =>{
    return (
        <div className="form">
            <div className="form-title">
                <h2>Save time,save money!</h2>
                <span> Sing up and  we''ll send the  best deals to you</span>
            </div>
            <div className="form-one">
                <input placeholder="Your Mail"   className="form-input"></input>
                <button type="Submit" className="form-btn"  > Subscibe</button>
            </div>
        </div>
    )
        
    
 }




 export default FormHotel