import React from 'react';
import moment from "moment/moment";

const BreakTimer = ({breakLength, addMinute, minusMinute}) => {
  const breakInMinutes = moment.duration(breakLength, 's').asMinutes();

  return (
    < div >
      <p id="break-label">Break Length</p>
      <p id="break-length">{breakInMinutes}</p>
      <button id="break-increment" onClick={addMinute}>+</button>
      <button id="break-decrement" onClick={minusMinute}>-</button>
    </div>
)
  ;
};

export default BreakTimer;
