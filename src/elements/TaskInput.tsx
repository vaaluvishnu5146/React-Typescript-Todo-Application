import React from "react";

export default function TaskInput(props: {
  value: string;
  handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleAddTask: () => void;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="What on your mind?"
        onChange={props.handleInputChange}
        value={props.value}
      />
      <button onClick={props.handleAddTask}>Add Task</button>
    </div>
  );
}
