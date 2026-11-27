import React from "react";

export default function Task3_PersonalPage(props) {
  return (
    <div className="task3-box">
      <h2>{props.fullName}</h2>
      <p>Телефон: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Місто проживання: {props.city}</p>
      <p>Досвід роботи: {props.experience}</p>
      <p>Навички: {props.skills}</p>
      {props.photo && (
        <img src={props.photo} alt={props.fullName} className="task3-photo" />
      )}
    </div>
  );
}
