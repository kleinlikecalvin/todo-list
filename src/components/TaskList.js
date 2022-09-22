import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return (
    <React.Fragment>
      {tasks.map(({ title, date, priority }) => {
        return <Task title={title} date={date} priority={priority} />;
      })}
    </React.Fragment>
  );
}
