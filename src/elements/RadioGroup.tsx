import React from "react";
import { Type } from "../Types/enums";

export default function RadioGroup({
  selected,
  onChange = (e) => {},
}: {
  selected: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-x-5 mb-5">
      <div className="todo-item">
        <input
          className="mr-2"
          type="radio"
          name="type"
          id={Type.ALL.toString().toLowerCase()}
          onChange={onChange}
          checked={selected === Type.ALL.toString().toLowerCase()}
        />
        <label className="text-md" htmlFor={Type.ALL.toString().toLowerCase()}>
          All
        </label>
      </div>
      <div className="todo-item">
        <input
          className="mr-2"
          type="radio"
          name="type"
          id={Type.TODO.toString().toLowerCase()}
          onChange={onChange}
          checked={selected === Type.TODO.toString().toLowerCase()}
        />
        <label className="text-md" htmlFor={Type.TODO.toString().toLowerCase()}>
          Todo
        </label>
      </div>
      <div className="todo-item">
        <input
          className="mr-2"
          type="radio"
          name="type"
          id={Type.DONE.toString().toLowerCase()}
          onChange={onChange}
          checked={selected === Type.DONE.toString().toLowerCase()}
        />
        <label className="text-md" htmlFor={Type.DONE.toString().toLowerCase()}>
          Done
        </label>
      </div>
    </div>
  );
}
