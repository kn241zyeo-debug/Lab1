import React, { useState } from "react";
import Task1_Hello from "./components/Task1_Hello";
import Task2_Table from "./components/Task2_Table";
import Task3_PersonalPage from "./components/Task3_PersonalPage";
import Task4_Motorcycles from "./components/Task4_Motorcycles";
import "./styles.css";

export default function App() {
  const [lastIndex, setLastIndex] = useState(0);

  const motorcycles = [
    { name: "Honda", id: 1 },
    { name: "Suzuki", id: 2 },
    { name: "Yamaha", id: 3 },
  ];

  function handleSelectIndex(index) {
    setLastIndex(index);
    return index;
  }

  return (
    <div className="app">
      <Task1_Hello name="Zhenya" />

      <Task2_Table />

      <Task3_PersonalPage
        fullName="Євгеній"
        phone="+380000000000"
        email="dfbs@gmail.com"
        city="Житомир"
        experience="Навчальні проєкти"
        skills="JavaScript, React, C#, SQL"
        photo="https://galtv.if.ua/files/news/19001/photo/26-32.jpg"
      />

      <Task4_Motorcycles
        motorcycles={motorcycles}
        onSelectIndex={handleSelectIndex}
      />
      <p>Останній індекс: {lastIndex}</p>
    </div>
  );
}
