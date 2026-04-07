import type { TodoV2 } from "../Types/Interfaces";

export default function TodoItem({
  data,
  deleteTodo,
  markTodoCompleted,
  openUpdateModal,
}: {
  data: TodoV2;
  deleteTodo: (id: string) => void;
  markTodoCompleted: (id: string, isCompleted: boolean) => void;
  openUpdateModal: (data: TodoV2) => void;
}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        checked={data.isCompleted}
        onChange={() => markTodoCompleted(data._id, !data.isCompleted)}
      />
      <span className="text">{data.title}</span>
      <div className="actions">
        <button className="icon-btn" onClick={() => openUpdateModal(data)}>
          ✏️
        </button>
        <button className="icon-btn" onClick={() => deleteTodo(data._id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
