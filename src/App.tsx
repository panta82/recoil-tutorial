import React from "react";
import { RecoilRoot } from "recoil";
import { CharacterCounter } from "./CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
