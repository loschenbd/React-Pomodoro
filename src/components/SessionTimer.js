import React from 'react';
import moment from "moment/moment";

const SessionTimer = ({addMinute, minusMinute, sessionLength}) => {
  const sessionInMinutes = moment.duration(sessionLength, 's').minutes();

  return (
    < div >
      <p id="session-label">Session Length</p>
        <p id="session-length">{sessionInMinutes}</p>
        <button id="session-increment" onClick={addMinute}>+</button>
        <button id="session-decrement" onClick={minusMinute}>-</button>
    </div>
)
  ;
};

export default SessionTimer;
