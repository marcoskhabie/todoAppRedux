import React from "react";
import "./styles.css";
import AddTodo from './redux/containers/AddTodo.container'
import TodoList from './redux/containers/TodoList.container'
import VisibilityFilters from './redux/containers/VisibilityFilters.container'

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
