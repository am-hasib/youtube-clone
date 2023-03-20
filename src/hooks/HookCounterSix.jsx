import React, { useState, useEffect } from "react";

function HookCounterSix() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You Clicked ${count}`;
  });
  return (
    <div>
      <span>Hook Counter Six </span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment : {count}
      </button>
    </div>
  );
}

export default HookCounterSix;
