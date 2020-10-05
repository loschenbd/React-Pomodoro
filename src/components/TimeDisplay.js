import React, {useState} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeDisplay = ({sessionLength}) => {
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  const timeLabel = moment.duration(timeLeft, 's').format('mm:ss');
  return (
    <div>
      {timeLabel}
    </div>
  );
};

export default TimeDisplay;
