
import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import { Task } from "./types";

const loadTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks);
  }
  return []
}

const updateStorage = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
function Component() {

  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  useEffect(() => {

    updateStorage(tasks)
  }, [tasks])

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);

  }

  const toggleTask = (id: string): void => {

    const updatedTasks = tasks.map((task: Task) => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    })
    setTasks(updatedTasks)


  }


  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Task List</h2>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
