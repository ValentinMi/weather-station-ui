import React, { useState } from "react";
import useInterval from "../../hooks/useInterval";

import "./index.scss";

const Clock = () => {
  const timeString = new Date();
  const [time, setTime] = useState(treatTime(timeString));

  useInterval(() => {
    const newTimeString = new Date();
    setTime(treatTime(newTimeString));
  }, 1000);

  function treatTime(date) {
    return date
      .toTimeString()
      .split("")
      .splice(0, 5);
  }

  return (
    <div className="clock">
      <span className="clock-timestring">{time}</span>
    </div>
  );
};

export default Clock;
