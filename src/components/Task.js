import React from "react";
import "./Task.css";
// need to take in args
//need to add strike through on check and change colors so it looks completed  (try to add class "completed" to make this work)
export default function Task({ title, date, priority }) {
  return (
    <div className="Task">
      <label>
        <input type={"checkbox"} />
        {title}
      </label>
      <div className="task-details-cont">
        <p>Complete By: {date}</p>
        <p>Priority: {priority}</p>
      </div>
    </div>
  );
}
