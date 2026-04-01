import TaskInput from "../elements/TaskInput";
import ListTask from "../elements/ListTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Todo() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Array<Task>>([]);

  function addTask() {
    setTasks([...tasks, { id: uuidv4(), title: task, completed: false }]);
    setTask("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setTask(event.target.value);
  }

  function toggleTaskCompletion(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function taskDeletion(id: string) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  return (
    <div>
      <TaskInput
        value={task}
        handleInputChange={handleInputChange}
        handleAddTask={addTask}
      />
      <ListTask
        type="todo"
        title="Todo"
        task={tasks.filter((e) => !e.completed)}
        toggleTaskCompletion={toggleTaskCompletion}
        taskDeletion={taskDeletion}
      />
      <ListTask
        type="completed"
        title="Completed"
        task={tasks.filter((e) => e.completed)}
        toggleTaskCompletion={toggleTaskCompletion}
        taskDeletion={taskDeletion}
      />
    </div>
  );
}
