import React, { useState } from "react";

function Hoge() {
  const [msg, setMsg] = useState("");
  return (
    <div className="App">
      <h1>This is Hoge!</h1>
      <input
        onChange={(e: any) => {
          setMsg(e.target.value);
        }}
      />
      <h2>{msg}</h2>
    </div>
  );
}

export default Hoge;
