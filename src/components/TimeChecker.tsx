import React, { useState, useEffect } from "react";
import TimeSlot from "./TimeSlot";

const TimeChcker = () => {
  const timeLists = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [selectedTimes, setSelectedTimes]: any = useState([]);
  const [mouseDown, setMouseDown]: any = useState(false);

  const handleToggleTime = (time: number, e: any) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((t: any) => t !== time));
      e.target.classList.remove("selected");
    } else {
      setSelectedTimes([...selectedTimes, time]);
      e.target.classList.add("selected");
    }
    console.log(selectedTimes);
  };

  const handleMouseDown = () => {
    setMouseDown((prev: any) => !prev);
    console.log(mouseDown);
  };

  return (
    <>
      <div
        className="time-checker"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseDown}
      >
        {timeLists.map((time, index) => (
          <TimeSlot
            key={index}
            time={time}
            isMouseDown={mouseDown}
            onToggle={handleToggleTime}
          />
        ))}
      </div>
    </>
  );
};

export default TimeChcker;
