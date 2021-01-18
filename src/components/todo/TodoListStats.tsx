import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../bl/todos";

export function TodoListStats() {
  const stats = useRecoilValue(todoListStatsState);

  return (
    <ul className="TodoListStats">
      <li>Total: {stats.totalCount}</li>
      <li>Completed: {stats.completedCount}</li>
      <li>Pending: {stats.uncompletedCount}</li>
      <li>Rate: {stats.percentCompleted}%</li>
    </ul>
  );
}
