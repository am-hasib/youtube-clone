import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <span>Hook Count Three </span>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <span>{JSON.stringify(name)}</span>
    </div>
  );
}

export default HookCounterThree;
