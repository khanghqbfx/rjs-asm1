import React from "react";
import "./SeachPop.css";


const SearchPop = () => {
    return(
        <div className="container-search">
           <div className="search-list">
           <div>
                <h2>Search</h2>
            </div>
            <p>destination</p>
            <input className="search-input"></input>
            <p>Chech-in Date</p>
            <input type="text"placeholder="02/02/2023 to 02/02/2023" className="search-input"></input>
            <h4>Options</h4>
            <div className="namelist">
            <span className="spanname">Min pice per night</span>
            <input className="nameint"></input>
            </div>
            <div className="namelist">
            <span className="spanname">Max pice per night</span>
            <input className="nameint"></input>
            </div>

            <div className="namelist">
            <span className="spanname">Adult</span>
            <input className="nameint"></input>
            </div>

            <div className="namelist">
            <span className="spanname">Children</span>
            <input className="nameint"></input>
            </div>

            <div className="namelist">
            <span className="spanname">room</span>
            <input className="nameint"></input>
            </div>
           </div>
          
            
            

        </div>
    )
}


 export default SearchPop