import { useState, useRef } from "react";
import ResultModel from "../ResultModel/ResulModel";
export default function TimeStopper(props) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(props.targetTime * 1000);
  const timeIsActive =
    timeRemaining > 0 && timeRemaining < props.targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handlStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }
  function handlStop() {
    clearTimeout(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(props.targetTime * 1000);
  }
  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={props.targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      ></ResultModel>
      <section className="challenge">
        <h2>{props.title.toUpperCase()}</h2>
        <p className="challenge-time">
          {props.targetTime} Second{props.targetTime <= 1 ? "" : "s"}
        </p>
        <button onClick={timeIsActive ? handlStop : handlStart}>
          {!timeIsActive ? "Start" : "Stop"}
        </button>
        timeIsActive
        <p className={timeIsActive ? "active" : undefined}>
          {!timeIsActive ? "Thời gian chưa bắt đầu" : "Thời gian đang chạy..."}
        </p>
      </section>
    </>
  );
}
