import { useState,useRef  } from "react";

export default function Player() {

  const updateName = ()=> bietdanh.current.value===""?setYourName("No Name"):setYourName(bietdanh.current.value); 

  const [yourName, setYourName] = useState("No Name");
  const bietdanh = useRef();
  return (
    <section id="player">
      <h2>Welcome {yourName}</h2>
      <div>
          <input type="text" ref ={bietdanh}placeholder="Nhập tên của bạn" />
          <button onClick={updateName}>Set name</button>
      </div>
    </section>
  );
}
