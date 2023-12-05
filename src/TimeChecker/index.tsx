import React, { useState, useEffect } from 'react';
import DayColumn from './DayColumn';

function TimeChecker() {
  const dayLists = ['월', '화', '수', '목', '금'];
  const [dragStart, setDragStart] = useState(false);
  const [noTimes, setNoTimes] = useState([[0], [0], [0], [0], [0]]);

  const checkDragStart = () => {
    setDragStart(true);
    console.log('drag Start');
  };
  const checkDragStop = () => {
    setDragStart(false);
    console.log('drag stop');
  };

  const getNoTimes = (selectedTimes: number[], day: number) => {
    setNoTimes((prev) => {
      const noTime = { ...prev };
      noTime[day] = selectedTimes;
      return noTime;
    });
  };

  useEffect(() => {
    console.log(noTimes);
  }, [noTimes]);

  return (
    <table
      role="presentation"
      className="time-checker"
      onMouseDownCapture={checkDragStart}
      onMouseUp={checkDragStop}
    >
      {dayLists.map((day, index) => (
        <DayColumn
          day={index}
          key={index}
          isDragStart={dragStart}
          getNoTimes={getNoTimes}
        />
      ))}
    </table>
  );
}

export default TimeChecker;
