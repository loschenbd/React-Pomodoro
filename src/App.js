import React, {useState} from 'react';
import './App.css';

import TimeDisplay from "./components/TimeDisplay";
import BreakTimer from "./components/BreakTimer"
import SessionTimer from "./components/SessionTimer"
import moment from "moment/moment";

function App() {
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);

  const minusBreakMinute = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0)
    } else {
      setBreakLength(newBreakLength);
    }

  };

  const addBreakMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength >= 0) {
      setBreakLength(breakLength + 60);
    }
  };
  const minusSessionMinute = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0)
    } else {
      setSessionLength(newSessionLength);
    }

  };

  const addSessionMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength >= 0) {
      setSessionLength(sessionLength + 60);
    }
  };
  return (
    <div className="App">
      { /*- Add Session Timer*/ }
      <SessionTimer
        sessionLength={sessionLength}
        addMinute={addSessionMinute}
        minusMinute={minusSessionMinute}
      />
      {/*- Add break Timer*/}
      <BreakTimer
        breakLength={breakLength}
        addMinute={addBreakMinute}
        minusMinute={minusBreakMinute}

      />
      {/*- Add Timer Display*/}
      <TimeDisplay/>
        {/*+ change TimeDisplay whenever session length changes (useEffect - called whenever a variable changes)*/}
        {/*+ Add countdown ( setInterval() )*/}
        {/*+ Stop Countdown ( clearInterval() ), intervalId -*/}
      {/*- Add time complete alert  - Add audio alert and play it (useRef)*/}
      {/*- Switch from Session to Break and visa versa (track session type) - set time left to break/session length*/}
      {/*- Add Reset Button*/}



    </div>
  );
}

export default App;
