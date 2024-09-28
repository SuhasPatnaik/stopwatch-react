import "./App.css";
import { useState, useEffect } from "react";

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
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-semibold pb-2">01-Stopwatch</h1>
        <div className="text-xl font-semibold">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="w-1/3 max-w-sm flex flex-row justify-evenly py-4">
          {!isRunning ? (
            <button
              className="border rounded-lg py-1 px-2"
              onClick={() => {
                setIsRunning(true);
              }}
            >
              Start
            </button>
          ) : (
            <button
              className="border rounded-lg py-1 px-2"
              onClick={() => {
                setIsRunning(false);
              }}
            >
              Stop
            </button>
          )}
          <button
            className="border rounded-lg py-1 px-2"
            onClick={() => {
              setTime(0);
              setIsRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
