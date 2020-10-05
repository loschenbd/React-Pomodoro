import React, {useState, useEffect} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeDisplay = ({sessionLength}) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const timeLabel = moment.duration(timeLeft, 's').format('mm:ss');

  const startStopTime = () => {
    setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        const newTimeLeft = prevTimeLeft - 1;
        if (newTimeLeft >= 0) {
          return prevTimeLeft - 1
        }
        return prevTimeLeft
      })
    }, 1000)
  };
  return (
    <div>
      {timeLabel}
      <button onClick={startStopTime}>start</button>
    </div>
  );
};

export default TimeDisplay;
