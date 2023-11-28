import React, { MouseEvent } from 'react';

type TMouseEvent = MouseEvent<HTMLElement>;

interface TimeCellProps {
  time: number;
  isDragStart: boolean;
  checkSelectedTime: (time: number, e: TMouseEvent) => void;
}

function TimeCell({ time, isDragStart, checkSelectedTime }: TimeCellProps) {
  const getSelectedTime = (event: TMouseEvent) => {
    if (isDragStart) {
      checkSelectedTime(time, event);
    }
  };

  return (
    <td
      className="time-slot"
      onMouseDown={(event) => getSelectedTime(event)}
      onMouseEnter={(event) => getSelectedTime(event)}
    >
      {`${time}:00`}
    </td>
  );
}

export default TimeCell;
