import React from "react";
import Intro from "components/Intro";
import UseState from "components/lessons/State";

function App() {
  return (
    <div className="">
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold underline">Hooks, a simple overview.</h1>
      </header>
      <main className="container mx-auto">
        <Intro />
        <UseState />
      </main>
    </div>
  );
}

export default App;
