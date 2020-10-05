import React, {useState, useEffect, useRef} from 'react';
import './App.css';

import TimeDisplay from "./components/TimeDisplay";
import BreakTimer from "./components/BreakTimer"
import SessionTimer from "./components/SessionTimer"

function App() {
  const beepElement = useRef(null);
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [sessionType, setSessionType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [intervalCount, setIntervalCount] = useState(null);



  const minusBreakMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength)
    }

  };

  const addBreakMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };
  const minusSessionMinute = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }

  };

  const addSessionMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(sessionLength + 60);
    }
  };
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const started = intervalCount != null;
  const startStopTime = () => {
    if (started) {
      clearInterval(intervalCount);
      setIntervalCount(null);
    } else {
      const newIntervalCount = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1
          }
          beepElement.current.play();
          if (sessionType === "Session") {
            setSessionType('Break');
            return breakLength;
          } else if (sessionType === 'Break') {
            setSessionType('Session');
            return sessionLength;
          }
        })
      }, 1000);
      setIntervalCount(newIntervalCount)
    }
  };


  const handleReset = () => {
    clearInterval(intervalCount)
    setIntervalCount(null)
    setSessionType('Session')
    setSessionLength(25 * 60)
    setBreakLength(5 * 60)
    setTimeLeft(25 * 60)
    beepElement.current.load()
  }
  return (
    <div className="App">
      {/*- Add Timer Display*/}
      <TimeDisplay
        sessionLength={sessionLength}
        breakLength={breakLength}
        sessionType={sessionType}
        startStopTime={startStopTime}
        handleReset={handleReset}
        timeLeft={timeLeft}
        started={started}
      />
      {/*+ change TimeDisplay whenever session length changes (useEffect - called whenever a variable changes)*/}
      {/*+ Add countdown ( setInterval() )*/}
      {/*+ Stop Countdown ( clearInterval() ), intervalId -*/}
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
      <audio ref={beepElement} id="beep">
        <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" type="audio/mpeg"/>
      </audio>

      {/*- Add time complete alert  - Add audio alert and play it (useRef)*/}
      {/*- Switch from Session to Break and visa versa (track session type) - set time left to break/session length*/}
      {/*- Add Reset Button*/}



    </div>
  );
}

export default App;
