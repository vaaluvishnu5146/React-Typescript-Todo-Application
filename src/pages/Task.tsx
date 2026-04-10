import React, { useEffect } from "react";
import { useParams } from "react-router";

const FETCH_TODO_BY_ID = "http://localhost:3000/todos/todo/";

export default function Task() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchTodoById(id);
    }
  }, [id]);

  function fetchTodoById(id: string) {
    fetch(FETCH_TODO_BY_ID + id)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return <div>Task</div>;
}
