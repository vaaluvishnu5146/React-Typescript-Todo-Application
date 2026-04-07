import { useEffect, useState } from "react";
import type { Todo } from "../Types/Interfaces";

const TODO_API = `https://jsonplaceholder.typicode.com/todos`;

export default function ActionItems() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    fetch(TODO_API)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error))
      .finally(() => console.log("Fetch attempt completed"));
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo.id}-${index}`}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
