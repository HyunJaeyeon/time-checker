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
      className="time-cell"
      onMouseDown={getSelectedTime}
      onMouseEnter={getSelectedTime}
      style={
        isSelected
          ? { backgroundColor: 'yellow' }
          : { backgroundColor: 'white' }
      }
    >
      {time}
    </td>
  );
}

export default TimeCell;
