import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimeCell from './TimeCell';

interface DayColumnProps {
  day: number;
  isDragStart: boolean;
  getNoTimes: (selectedTimes: number[], day: number) => void;
}

const Column = styled.tr`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  flex-shrink: 0px;
  flex-grow: 1;
`;

function DayColumn({ day, isDragStart, getNoTimes }: DayColumnProps) {
  const timeLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    getNoTimes(selectedTimes, day);
  }, [isDragStart]);

  return (
    <Column>
      {timeLists.map((time, index) => (
        <TimeCell
          key={index}
          time={time}
          isDragStart={isDragStart}
          checkSelectedTime={checkSelectedTime}
        />
      ))}
    </Column>
  );
}

export default DayColumn;
