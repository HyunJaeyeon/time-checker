import React, { useState } from "react";

interface TimeSlotProps {
  time: number;
  isMouseDown: boolean;
  onToggle: (time: number, e: any) => void;
}

const TimeSlot = ({ time, isMouseDown, onToggle }: TimeSlotProps) => {
  const handleToggle = (e: any) => {
    if (isMouseDown) {
      onToggle(time, e);
    }
  };

  return (
    <div className="time-slot" onMouseEnter={(e) => handleToggle(e)}>
      {time}
    </div>
  );
};

export default TimeSlot;
