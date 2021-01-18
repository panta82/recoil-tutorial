import React from "react";
import { ITodoItem, todoListState } from "../../bl/todos";
import { arrayRemove, arrayReplace } from "../../bl/tools";
import { useRecoilState } from "recoil";

import "./TodoItem.css";

export function TodoItem({ item }: { item: ITodoItem }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const itemIndex = todoList.findIndex((i) => i === item);

  return (
    <div className={"TodoItem"}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={(e) =>
          setTodoList(
            arrayReplace(todoList, itemIndex, {
              ...item,
              isComplete: !item.isComplete,
            })
          )
        }
      />
      <input
        type={"text"}
        value={item.text}
        onChange={(e) =>
          setTodoList(
            arrayReplace(todoList, itemIndex, {
              ...item,
              text: e.target.value,
            })
          )
        }
      />
      <button
        type={"button"}
        className="danger"
        onClick={() => setTodoList(arrayRemove(todoList, itemIndex))}
      >
        X
      </button>
    </div>
  );
}
