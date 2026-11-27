import React from "react";

export default function Task1_Hello({ name = "Zhenya" }) {
  return (
    <div className="task1-box">
      <h1>Hello, {name}</h1>
    </div>
  );
}
