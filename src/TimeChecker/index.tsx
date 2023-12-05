import React, { useState } from 'react';
import DayColumn from './DayColumn';

function TimeChecker() {
  const dayLists = ['월', '화', '수', '목', '금'];
  const [dragStart, setDragStart] = useState(false);

  const checkDragStart = () => {
    setDragStart((prev) => !prev);
  };

  return (
    <table
      role="presentation"
      className="time-checker"
      onMouseDownCapture={checkDragStart}
      onMouseUp={checkDragStart}
    >
      {dayLists.map((day, index) => (
        <DayColumn day={day} key={index} isDragStart={dragStart} />
      ))}
    </table>
  );
}

export default TimeChecker;
