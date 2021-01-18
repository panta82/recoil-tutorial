import React, { FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { nextTodoId, todoListState } from "../bl/todos";

import "./TodoItemCreator.css";

export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    setTodoList((oldTodos) => {
      // Can't do this
      // for (const todo of oldTodos) {
      //   // Play with mutation
      //   (todo.text as any) += "!";
      // }

      return [
        ...oldTodos,
        {
          id: nextTodoId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });

    setInputValue("");
  }

  return (
    <div className="TodoItemCreator">
      <form onSubmit={handleFormSubmit}>
        <input
          type={"text"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type={"submit"}>Add</button>
      </form>
    </div>
  );
}
