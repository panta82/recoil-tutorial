import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./todo/TodoList";
import { CharacterCounter } from "./characters/CharacterCounter";
import { UsersDemo } from "./users/UsersDemo";
import "./App.css";

type IAppSection = "basic" | "todo" | "async";
const SECTION_CHOICES: Array<[IAppSection, string]> = [
  ["basic", "Basic demo"],
  ["todo", "Todo app"],
  ["async", "Async user tester"],
];

function App() {
  const [activeSection, setActiveSection] = useState("todo" as IAppSection);

  return (
    <RecoilRoot>
      <div className="App container">
        <h1>Recoil tester</h1>

        <div className="App-sections">
          {SECTION_CHOICES.map(([section, title]) => (
            <label key={section}>
              <input
                type={"radio"}
                name={"App-section"}
                value={section}
                checked={activeSection === section}
                onChange={() => setActiveSection(section)}
              />
              {title}
            </label>
          ))}
        </div>

        <React.Suspense fallback={null}>
          {activeSection === "basic" && <CharacterCounter />}
          {activeSection === "todo" && <TodoList />}
          {activeSection === "async" && <UsersDemo />}
        </React.Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
