import React, { useState } from "react";
import TodoForm from "./todoForm";
import Todo from "./todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    console.log([todo, ...todos]);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArray = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArray);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's The Plan For Today ?</h1>
      <TodoForm onSubmit={AddTodo} />
      <ul className="todoList">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </ul>
    </div>
  );
}

export default TodoList;
