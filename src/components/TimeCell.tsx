import React, { useState } from 'react';

interface TimeCellProps {
  time: number;
  isDragStart: boolean;
  checkSelectedTime: (time: number) => boolean;
}

function TimeCell({ time, isDragStart, checkSelectedTime }: TimeCellProps) {
  const [isSelected, setIsSelected] = useState(false);

  const getSelectedTime = () => {
    if (isDragStart) {
      setIsSelected(checkSelectedTime(time));
    }
  };

  return (
    <td
      className="time-slot"
      onMouseDown={getSelectedTime}
      onMouseEnter={getSelectedTime}
      style={
        isSelected ? { backgroundColor: 'teal' } : { backgroundColor: 'tomato' }
      }
    >
      {' '}
    </td>
  );
}

export default TimeCell;
