
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function DatePicker() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
       <input type="text" className="date-input" onClick={handleClick} placeholder=" 06/20/2023 to 06/20/2023?"></input>
      {showModal && (
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          className="date"
          minDate={new Date()}
          onChange={(item) => console.log(item)}
          ranges={[
            {
              startDate: new Date(),
              endDate: new Date(),
              key: "selection",
            },
          ]}
        />
      )}
    </>
  );
}

export default DatePicker;