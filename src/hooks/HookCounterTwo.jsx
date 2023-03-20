import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const fiveIncrement = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <span>Hook Counter Two </span>
      <span>
        <input type="text" value={count} disabled />
      </span>
      <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <button onClick={() => setCount(initialCount)}>Reset</button>

        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>

        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decreament
        </button>
        <button onClick={fiveIncrement}>Icrement by 5</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
