import React from "react";
import "./TaskForm.css";

/* 
- onSubit of the form will create a new Task and add it to the App
- going to need to pass args to Task like: children, due date, and priority level? 
- could be cool to have the tasks divide into Today, Tomorrow, Soon or something
-sort by priority
- change border color and Priority value color accordingly

*/

export default function TaskForm({ taskPropsCallback }) {
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [priority, setPriority] = React.useState("high");

  return (
    <form
      className="TaskForm"
      onSubmit={(event) => {
        event.preventDefault();
        taskPropsCallback({
          title: title,
          date: date,
          priority: priority,
        });
        setTitle("");
        setDate("");
        setPriority("high");
      }}
    >
      <label htmlFor={"task"}>
        Task:
        <input
          type={"text"}
          id="task"
          placeholder="Task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor={"due"}>
        Due:
        <input
          type={"date"}
          id="due"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <label htmlFor={"priority"}>
        Priorty:
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value={"high"}>High</option>
          <option value={"medium"}>Medium</option>
          <option value={"low"}>Low</option>
        </select>
      </label>
      <button>+</button>
    </form>
  );
}
