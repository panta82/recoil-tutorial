import { atom } from "recoil";

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
