import React, { useState } from 'react';
import TimeCell from './TimeCell';

function DayColumn() {
  const timeLists = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [selectedTimes, setSelectedTimes] = useState<number[]>([]);
  const [dragStart, setDragStart] = useState(false);

  const checkSelectedTime = (time: number) => {
    let isSelected = false;

    if (selectedTimes.includes(time)) {
      setSelectedTimes(
        selectedTimes.filter((selectTime) => selectTime !== time),
      );
    }
    if (!selectedTimes.includes(time)) {
      setSelectedTimes([...selectedTimes, time]);
      isSelected = true;
    }

    return isSelected;
  };

  const checkDragStart = () => {
    setDragStart((prev) => !prev);
  };

  return (
    <tr
      className="time-checker"
      onMouseDownCapture={checkDragStart}
      onMouseUp={checkDragStart}
    >
      {timeLists.map((time, index) => (
        <TimeCell
          key={index}
          time={time}
          isDragStart={dragStart}
          checkSelectedTime={checkSelectedTime}
        />
      ))}
    </tr>
  );
}

export default DayColumn;
