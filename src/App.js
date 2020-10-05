import React from 'react';
import './App.css';

import TimeDisplay from "./components/TimeDisplay";
import BreakTimer from "./components/BreakTimer"
import SessionTimer from "./components/SessionTimer"

function App() {
  return (
    <div className="App">
      { /*- Add Session Timer*/ }
      <SessionTimer/>
      {/*- Add break Timer*/}
      <BreakTimer/>
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
