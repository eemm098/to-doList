import React, { useState } from "react";
import TodoForm from "./todoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (value) => {

    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm
      className='edit'
      edit={edit}
      onSubmit={submitUpdate}
    />;
  }

  return [...todos].map((todo, index) => 
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
     >
      <div key={todo.id}  onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="btns">
        <button
          className="delete"
          onClick={() => removeTodo(todo.id)}>
          delete
        </button>

        <button
          className="edit"
          onClick={() => setEdit({ id : todo.id, value : todo.text })}>
          edit
        </button>
      </div>
    </div>
  );
}

export default Todo;
