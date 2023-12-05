import React, { useState } from 'react';
import TimeCell from './TimeCell';

interface DayColumnProps {
  day: string;
  isDragStart: boolean;
}

function DayColumn({ day, isDragStart }: DayColumnProps) {
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

    console.log(`${day}:${selectedTimes}`);
    return isSelected;
  };

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
