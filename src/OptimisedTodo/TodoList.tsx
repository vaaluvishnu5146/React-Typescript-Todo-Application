import { useMemo } from "react";
import { filterTodos } from "./utils";

export interface TodoOptimised {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList({
  todos,
  theme,
  tab,
}: {
  todos: Array<TodoOptimised>;
  theme: any;
  tab: string;
}) {
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab]);

  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
