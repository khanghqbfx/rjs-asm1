import React from "react";
import "./SearchItem.css"

 const SearchItem = (props) => {
  const freeCancel = props.free_cancel ? <p>Free freeCancel</p> : null;
  const SeachCan = props.free_cancel ? <p>you can cancel  later , so lock in this great price today</p> : null ;
 
    return (
      <div className="search-one">
        <div className="seach">
        <div className="seach-img">
          <img src={props.image_url} alt = {props.image_url} ></img>
        </div>
        <div className="seach-title">
          <h3>{props.name}</h3>
          <p className="seach-distance">{props.distance} from center</p>
          <p className="seach-span">{props.tag}</p>
          <p className="seach-one">{props.description}</p>
          <p className="seach-tow">{props.type}</p>
          <p className="seach-three">{freeCancel}</p>
          <p className="seach-six">{SeachCan}</p>
        </div>
        <div>
          <div className=" seach-pice">
           <div className="pice-title">
            <h4>{props.rate_text}</h4>
              <span>{props.rate}</span>
           </div>
            <p className="seach-price">${props.price}</p>
            <p className="pice-p">includer taxer and fees </p>
             <button type = "text" className="pice-btn">See availability</button>
          </div>
        </div>
      </div>
        
      </div>
    )

    
 }

 export default SearchItem