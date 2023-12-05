import React, { useEffect, useState } from 'react';
import TimeCell from './TimeCell';

interface DayColumnProps {
  day: number;
  isDragStart: boolean;
  getNoTimes: (selectedTimes: number[], day: number) => void;
}

function DayColumn({ day, isDragStart, getNoTimes }: DayColumnProps) {
  const timeLists = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [selectedTimes, setSelectedTimes] = useState<number[]>([]);

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

  useEffect(() => {
    console.log('Start Drag');
    getNoTimes(selectedTimes, day);
  }, [isDragStart]);

  return (
    <tr className="day-column">
      {timeLists.map((time, index) => (
        <TimeCell
          key={index}
          time={time}
          isDragStart={isDragStart}
          checkSelectedTime={checkSelectedTime}
        />
      ))}
    </tr>
  );
}

export default DayColumn;
