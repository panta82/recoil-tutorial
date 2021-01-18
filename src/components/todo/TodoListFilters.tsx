import React from "react";
import { useRecoilState } from "recoil";
import { ITodoListFilter, todoListFilterState } from "../../bl/todos";

import "./TodoListFilters.css";

const OPTIONS: Array<{ value: ITodoListFilter; text: string }> = [
  { value: "all", text: "Show all" },
  { value: "completed", text: "Show only completed" },
  { value: "uncompleted", text: "Show only active" },
];

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <div className="TodoListFilters">
      <label htmlFor="TodoListFilters-filter">Filter:</label>
      <select
        id="TodoListFilters-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value as ITodoListFilter)}
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  );
}
