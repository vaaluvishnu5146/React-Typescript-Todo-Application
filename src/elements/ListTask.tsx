import type { Task } from "../pages/Todo";

export default function ListTask(props: {
  type: string;
  title: string;
  task: Array<Task>;
  toggleTaskCompletion: (id: string) => void;
  taskDeletion: (id: string) => void;
}) {
  return (
    <div>
      <label>{props.title}</label>
      <ul>
        {props.task.map((element) => (
          <li>
            <div className="task_item">
              <p>{element.title}</p>
              <button onClick={() => props.toggleTaskCompletion(element.id)}>
                {element.completed ? "✅" : "☑️"}
              </button>
              {props.type == "completed" && (
                <button onClick={() => props.taskDeletion(element.id)}>
                  ❌
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ✅
