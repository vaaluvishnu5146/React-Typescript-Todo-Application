import React, { useEffect, useState } from "react";
import TextInputV1 from "../components/TextInputv1";
import TodoItem from "../components/TodoItem";
import type { TodoV2 } from "../Types/Interfaces";
import { UpdateTodoModal } from "../components/UpdateTodoModal";
import { useSearchParams } from "react-router";
import RadioGroup from "../elements/RadioGroup";
import { Type } from "../Types/enums";
import VishnuAxios from "../utils/VishnuAxios";

const TODO_API = `http://localhost:3000/todos`;
const TODO_SAVE_API = `http://localhost:3000/todos/createTodo`;
const TODO_DELETE_API = `http://localhost:3000/todos/deleteTodo/`;
const TODO_UPDATE_API = `http://localhost:3000/todos/updateTodo/`;

export default function TaskTracker() {
  const [todo, setTodo] = useState<string>("");
  const [updatedTodo, setUpdatedTodo] = useState<TodoV2>({
    title: "",
    isCompleted: false,
  });
  const [todos, setTodos] = useState<Array<TodoV2>>([]);
  const [updateModalOpen, setUpdateModal] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedType = searchParams.get("type");

  useEffect(() => {
    fetchTodos(selectedType);
  }, [searchParams]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (todo.trim() === "") {
      alert("Please enter a task.");
      return;
    } else {
      saveTodo();
      setTodo("");
    }
  }

  function fetchTodos(type?: string | null) {
    VishnuAxios.get("/todos" + getFilterType(type))
      .then((response) => {
        console.log(response);
        if (response && response.status == 200) {
          setTodos(response.result.data);
        }
      })
      .catch((error) => console.error("Error fetching todos:", error))
      .finally(() => console.log("Fetch attempt completed"));
  }

  function saveTodo() {
    fetch(TODO_SAVE_API, {
      method: "POST",
      body: JSON.stringify({ title: todo }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log("Todo created successfully:", result);
          fetchTodos(selectedType);
        }
      })
      .catch((error) => console.error("Error creating todo:", error));
  }

  function markTodoCompleted(id: string, isCompleted: boolean) {
    fetch(`${TODO_UPDATE_API}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log("Todo deleted successfully:", result);
          fetchTodos(selectedType);
        }
      })
      .catch((error) => console.error("Error deleting todo:", error));
  }

  function deleteTodo(id: string) {
    console.log(id);
    fetch(`${TODO_DELETE_API}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log("Todo deleted successfully:", result);
          fetchTodos(selectedType);
        }
      })
      .catch((error) => console.error("Error deleting todo:", error));
  }

  function updateTodo() {
    fetch(`${TODO_UPDATE_API}${updatedTodo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updatedTodo.title,
        isCompleted: updatedTodo.isCompleted,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log("Todo updated successfully:", result);
          fetchTodos(selectedType);
        }
      })
      .catch((error) => console.error("Error updating todo:", error))
      .finally(() => setUpdateModal(false));
  }

  function handleTodoUpdate(e: React.ChangeEvent<HTMLInputElement>) {
    const copy = {
      ...updatedTodo,
    };

    if (e.target.id === "title") {
      copy.title = e.target.value;
    } else {
      copy.isCompleted = e.target.checked;
    }

    setUpdatedTodo(copy);
  }

  function handleUpdateModalOpen(data: TodoV2) {
    setUpdatedTodo(data);
    setUpdateModal(true);
  }

  function getFilterType(type?: string | null) {
    console.log(type);
    if (type?.toLowerCase() == Type.DONE.toString().toLowerCase()) {
      return `?isCompleted=true`;
    } else if (type?.toLowerCase() == Type.TODO.toString().toLowerCase()) {
      return `?isCompleted=false`;
    } else {
      return "";
    }
  }

  function changeSearchParamsInURL(type: string) {
    if (type) {
      setSearchParams({ type });
    }
  }

  return (
    <div className="todo-app-body">
      <div className="app">
        <TextInputV1
          value={todo}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <div>
          <RadioGroup
            selected={selectedType}
            onChange={(e) => changeSearchParamsInURL(e.target.id)}
          />
        </div>
        <div className="overflow-container">
          {todos?.map((item, index) => (
            <TodoItem
              key={`${item._id}-${index}`}
              data={item}
              deleteTodo={deleteTodo}
              markTodoCompleted={markTodoCompleted}
              openUpdateModal={handleUpdateModalOpen}
            />
          ))}
        </div>
        <UpdateTodoModal
          show={updateModalOpen}
          onClose={() => setUpdateModal(false)}
          handleModalOpen={handleTodoUpdate}
          handleUpdate={updateTodo}
          data={updatedTodo}
        />
      </div>
    </div>
  );
}
