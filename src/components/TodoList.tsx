import React from "react";
import { TodoItemCreator } from "./TodoItemCreator";
import { useRecoilValue } from "recoil";
import { todoListState } from "../bl/todos";
import { TodoItem } from "./TodoItem";

import "./TodoList.css";

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div className="TodoList">
      <TodoItemCreator />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
