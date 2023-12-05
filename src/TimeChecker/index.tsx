import React, { useState, useEffect } from 'react';
import DayColumn from './DayColumn';

function TimeChecker() {
  const dayLists = ['월', '화', '수', '목', '금'];
  const [dragStart, setDragStart] = useState(false);
  const [noTimes, setNoTimes] = useState<number[][]>([]);

  const checkDragStart = () => {
    setDragStart(true);
    // console.log('drag Start');
  };
  const checkDragStop = () => {
    setDragStart(false);
    // console.log('drag stop');
  };

  const getNoTimes = (selectedTimes: number[], day: number) => {
    setNoTimes((currentNoTimes) => {
      const noTimesCopy = [...currentNoTimes];
      noTimesCopy[day] = selectedTimes;
      return noTimesCopy;
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
