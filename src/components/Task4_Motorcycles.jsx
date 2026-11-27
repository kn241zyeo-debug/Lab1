import React, { useState } from "react";

export default function Task4_Motorcycles({ motorcycles, onSelectIndex }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function handleChange(event) {
    const index = event.target.selectedIndex;
    setSelectedIndex(index);

    if (onSelectIndex) {
      onSelectIndex(index);
    }
  }

  return (
    <div className="task4-box">
      <select
        value={selectedIndex}
        onChange={handleChange}
        className="task4-select"
      >
        {motorcycles.map((moto, index) => (
          <option key={moto.id} value={index}>
            {moto.name}
          </option>
        ))}
      </select>
      <p>Вибраний індекс: {selectedIndex}</p>
    </div>
  );
}
