import React from "react"
import useClock from "../hooks/useClock"

type Props = {
  
};

const Clock = (props: Props) => {
  
  const {hours, minutes,seconds}:any = useClock()
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        24 Hours Live Custom Component Clock
      </h4>
      <span data-testid="clock-hours">
        {hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {seconds}
        </span>
    </div>
  );
};

export default Clock;
