import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addNumber = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  const removeNumber = (length) => {
    setItems((prevItems) => prevItems.filter(items < length));
  };
  const resetAll = () => {
    setItems([]);
  };
  return (
    <div>
      <span>Hook Counter Four </span>
      <button onClick={addNumber} style={{ marginRight: "5px" }}>
        Add
      </button>
      {/* <button
        style={{ marginRight: "5px" }}
        onClick={() => removeNumber(items.length)}
      >
        Remove
      </button> */}
      <button onClick={resetAll}>Reset</button>
      <div>
        <ul style={{ display: "flex", gap: "5px", listStyle: "none" }}>
          {items.map((item) => (
            <li key={item.id}> {item.value} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HookCounterFour;
