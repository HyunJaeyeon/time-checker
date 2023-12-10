import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DayColumn from './DayColumn';
import formatter from '../../utils/formatter';

const CheckerTable = styled.table`
  display: flex;
  border: 2px solid #333333;
  width: 322px;
  height: 412px;
`;

const Days = styled.div`
  display: flex;
  width: 322px;
  height: 18px;
  justify-content: center;
  align-items: center;
  gap: 52px;
  flex-shrink: 0;
`;

const Text = styled.p`
  color: #5e5e5e;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Times = styled.div`
  display: flex;
  flex-direction: column;
  height: 412px;
  width: 28px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Box = styled.div`
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
  flex-basis: auto;
  width: 350px;
`;

function TimeChecker() {
  const dayLists = ['월', '화', '수', '목', '금'];
  const timeLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dragStart, setDragStart] = useState(false);
  const [noTimes, setNoTimes] = useState<number[][]>([]);

  const checkDragStart = () => {
    setDragStart(true);
  };
  const checkDragStop = () => {
    setDragStart(false);
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
    console.log(formatter(noTimes));
  }, [noTimes]);

  return (
    <Box>
      <Times>
        {timeLists.map((time) => (
          <Text>{time + 8}</Text>
        ))}
      </Times>
      <div>
        <Days>
          {dayLists.map((day) => (
            <Text>{day}</Text>
          ))}
        </Days>
        <CheckerTable
          role="presentation"
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
        </CheckerTable>
      </div>
    </Box>
  );
}

export default TimeChecker;
