import React, { useState, MouseEvent } from 'react';
import TimeCell from './TimeCell';

type TMouseEvent = MouseEvent<HTMLElement>;

function DayColumn() {
  const timeLists = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [selectedTimes, setSelectedTimes] = useState<number[]>([]);
  const [dragStart, setDragStart] = useState(false);

  const checkSelectedTime = (time: number, e: TMouseEvent) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(
        selectedTimes.filter((selectTime) => selectTime !== time),
      );
      e.target.classList.remove('selected');
    }
    if (!selectedTimes.includes(time)) {
      setSelectedTimes([...selectedTimes, time]);
      e.target.classList.add('selected');
    }
    console.log(selectedTimes);
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
