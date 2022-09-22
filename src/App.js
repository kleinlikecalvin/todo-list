import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [taskList, setTaskList] = React.useState([]);

  return (
    <div className="App">
      <TaskForm
        taskPropsCallback={(task) => setTaskList([task, ...taskList])}
      />
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
