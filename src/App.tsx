import React, {
  useState,
  useRef,
  MutableRefObject,
  SyntheticEvent,
  useCallback,
} from "react";
import Intro from "components/Intro";
import UseState from "components/UseState/UseState";
import UseEffect from "components/UseEffect";
import { v4 as uuid } from "uuid";

function App() {

  return (
    <>
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold underline">
          Hooks, a simple overview.
        </h1>
      </header>
      <main className="container mx-auto">
        <Intro />
        <UseState />
        <hr />
        <UseEffect />
      </main>
    </>
  );
}

export default App;
