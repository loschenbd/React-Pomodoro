import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeDisplay = ({started, timeLeft, startStopTime, sessionType, handleReset }) => {
  const timeLabel = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
  return (
    <div>
      <p id="timer-label">{sessionType}</p>
        <p id="time-left">{timeLabel}</p>
      <button id="start_stop" onClick={startStopTime}>{started? 'Stop': 'Start'}</button>
      <button id="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TimeDisplay;
