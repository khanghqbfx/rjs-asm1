 import React  from "react";
 import "./style.css"
 import { FaBed ,FaFemale ,FaCalendarAlt } from "react-icons/fa";
 import DatePicker from "../../DatePicker/DataPicker";



  function Header(props) {
    const handleClick = () => {
        window.location.replace('/search');
      };
    
      
    
        return (
           <div className="header">
                <div>
                    <h1> A life  of discounts? It's Gennius</h1>
                    <p> Get rewarder for your travels- unlock  ínstant savings of 10% or more with a free accont</p>
                </div>
                <button type ='Submit'  className='header-btn'>Sing In / Register</button> 
                <div>
                    <div className="header-input">
                       <div className="input">
                            <div  className="input-one">
                                <FaBed className="input-icon" />
                                <input type="text" placeholder=" Where are your going?"></input>
                            </div>
                            <div  className="input-one">
                                <FaCalendarAlt className="input-icon" /> 
                                <div>
                                <DatePicker  />
                                </div>
                            
                                
                                
                            </div>

                            <div  className="input-one">
                                <FaFemale className="input-icon" />
                                <input type="text" placeholder="1 adult 0 children 1room"></input>
                            </div>
                            <button onClick={handleClick} type="text" className="input-btn">Search</button>                    
                        </div>
                    </div>

                </div>   
            </div>
            
            
        )
  }


export default Header

