
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import { Task } from "./types";
function Component() {

  const [tasks, setTasks] = useState<Task[]>([])


  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  }

  const toggleTask = () => {

  }


  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List />
    </div>
  );
}
export default Component;
