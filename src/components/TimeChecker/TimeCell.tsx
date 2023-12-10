import React, { useState } from 'react';
import styled from 'styled-components';

interface TimeCellProps {
  time: number;
  isDragStart: boolean;
  checkSelectedTime: (time: number) => boolean;
}

const Cell = styled.td`
  padding: 0px;
  border: 0.7px solid #b5b5b5;
  flex-shrink: 0px;
  flex-grow: 1;
  cursor: pointer;
`;

function TimeCell({ time, isDragStart, checkSelectedTime }: TimeCellProps) {
  const [isSelected, setIsSelected] = useState(false);

  const getSelectedTime = () => {
    if (isDragStart) {
      setIsSelected(checkSelectedTime(time));
    }
  };

  return (
    <Cell
      onMouseDown={getSelectedTime}
      onMouseEnter={getSelectedTime}
      style={
        isSelected ? { backgroundColor: '#FB0' } : { backgroundColor: 'white' }
      }
    >
      {' '}
    </Cell>
  );
}

export default TimeCell;
