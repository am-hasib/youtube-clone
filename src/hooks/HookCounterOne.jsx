import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  // it recieve aan argument which is the initial value of state property
  // return the current value of state property
  // a function which is capable of change of the state property

  return (
    <div>
      <span>Hook Counter One </span>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default HookCounter;
