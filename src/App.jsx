import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms for more precision
      }, 10);
    }
    /* else if (!isRunning && time !== 0) {
      clearInterval(interval); // Stop updating time when paused
    } */
    return () => clearInterval(interval); // Cleanup the interval when the component unmounts or when isRunning changes
  }, [isRunning]);

  return (
    <>
      <h1>01-Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!isRunning ? (
          <button
            onClick={() => {
              setIsRunning(true);
            }}
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => {
              setIsRunning(false);
            }}
          >
            Stop
          </button>
        )}
        <button
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
