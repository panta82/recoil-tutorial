import { atom, selector } from "recoil";

let lastTodoId = 0;
export function nextTodoId() {
  lastTodoId++;
  return lastTodoId;
}

export interface ITodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom({
  key: "todoListState",
  default: [] as ITodoItem[],
});

// *************************************************************************************************

export type ITodoListFilter = "all" | "completed" | "uncompleted";

export const todoListFilterState = atom<ITodoListFilter>({
  key: "todoListFilterState",
  default: "all",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "completed":
        return list.filter((item) => item.isComplete);
      case "uncompleted":
        return list.filter((item) => !item.isComplete);
    }
    return list;
  },
});

// *************************************************************************************************

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalCount = todoList.length;
    const completedCount = todoList.filter((item) => item.isComplete).length;
    const uncompletedCount = totalCount - completedCount;
    const percentCompleted =
      totalCount === 0 ? 0 : ((completedCount * 100) / totalCount).toFixed(2);

    return {
      totalCount,
      completedCount,
      uncompletedCount,
      percentCompleted,
    };
  },
});
