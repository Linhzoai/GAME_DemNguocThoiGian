import { useImperativeHandle, useRef } from "react";
import {createPortal} from "react-dom";
export default function ResultModel({
  remainingTime,
  targetTime,
  ref,
  onReset,
}) {
  const dialogInside = useRef();
  const formatRemainTime = (remainingTime / 1000).toFixed(2);
  const userLost = remainingTime<=0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialogInside} className="result-modal">
      {userLost? <h2>Bạn thua rồi</h2> : <h2>Bạn được {score} điểm</h2>}
      <p>
        Thời gian đich: <strong>{targetTime} second</strong>
      </p>
      <p>
        Thời gian còn lại: <strong>{formatRemainTime} second</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,document.getElementById("root")
  );
}
