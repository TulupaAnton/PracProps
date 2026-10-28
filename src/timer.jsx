import { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const timerId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>Прошло секунд: {seconds}</h2>
      <button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning == true ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
