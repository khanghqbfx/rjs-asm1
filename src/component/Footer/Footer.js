import React from 'react';
import "./Footer.css"


function Footer(props) {
    return(
      <div className='row'>
        {props.footerData.map((item)=>(
          <div className='footer' key = {item.col_number}>
            {item.col_values.map((value)=>(
              <div key = {value}>{value}</div>
            ))}
          </div>
        ))}
      </div>
    )
     
}
  
export default Footer;