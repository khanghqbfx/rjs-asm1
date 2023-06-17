import React from "react";
import "./SeachList.css"
import SearchItem from "../SearchItemList/SearchItem";
const SeachList =(props) => {
      
    return(
      <div>
          <div className="seach-list">
            {props.items.map((item) =>(
              <SearchItem key = {item.id}
                    name ={item.name}
                    distance =  {item.distance}
                    tag = {item.tag}
                    type = {item.type}
                    description = {item.description}
                    free_cancel = {item.free_cancel}
                    price = {item.price}
                    rate = {item.rate}
                    rate_text ={item.rate_text}
                    image_url = {item.image_url}
              ></SearchItem>
            ))}
          </div>
      </div>
    )
}

export default SeachList