import React  from 'react';
import './NavBar.css'
import { FaBed  ,FaPlane ,FaCarAlt } from "react-icons/fa";






function Navbar(props) {
  return(
    <nav>
      <div className='navbar'>


        <div  className='navbar-title'>
             <h3>Booking Wedsite</h3>
        </div>
        <div  className='btn'>
          <button type='Submit' className='btn1'>Regites</button>
          <button type='Submit' className='btn2'>Login</button>
        </div>

        {/*  Navbar */}
       <div className='navbar-list'>
          <div className='list-one'>
            <FaBed className='icon' />
            <span className='navbar-name'>Fights</span>
          </div>

          <div>
            <FaPlane className='icon' />
            <span className='navbar-name'>Stays</span>
          </div>

        
          <div>
          <FaCarAlt className='icon' />
            <span className='navbar-name'>Card rentals</span>
          </div>

          <div>
            <FaBed className='icon' />
            <span className='navbar-name'>Attraction</span>
          </div>

          <div>
          <FaCarAlt className='icon' />
            <span className='navbar-name'>Taxi</span>
          </div>
       </div>
      </div>
    </nav>
  )
}
export default Navbar;
   
   

   
        
   
      


      
        
         

      


