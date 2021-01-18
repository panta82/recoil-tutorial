import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./todo/TodoList";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="App container">
        <h1>Recoil TODO</h1>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
