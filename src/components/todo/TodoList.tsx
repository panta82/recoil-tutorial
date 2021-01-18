import React from "react";
import { TodoItemCreator } from "./TodoItemCreator";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../bl/todos";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";

import "./TodoList.css";
import { TodoListStats } from "./TodoListStats";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div className="TodoList">
      <TodoItemCreator />
      <TodoListFilters />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}

      <TodoListStats />
    </div>
  );
}
