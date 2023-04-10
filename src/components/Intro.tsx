import React from "react";

const Intro = () => {
  return (
    <div className="border-b-2 border-zinc-100">
      <div className="text-white space-y-3 inline-block w-5/6 p-6 bg-zinc-600 shadow shadow-black/60">
        <p>
          Hooks can be used to modify the state of a component. They can be used
          to update the state of a component in response to user input.
        </p>
        <p>
          There are many hooks that are used with React. You can make your own
          custom hooks too. Most packages that are compatible with React have
          added hooks to use their features in React with ease.
        </p>
        <p>
          We'll focus on the ones directly from React for now. Just go over the
          basics that should've been taught in PCC. With some examples, they're
          simple and easy to pick up. Once you've learned you'll never want to
          write another class component again.
        </p>
        <p>
          You can still read the original documentation introducing Hooks from
          the time of release{" "}
          <a href="https://legacy.reactjs.org/docs/hooks-intro.html">here</a>.
          Those docs are no longer maintained but the info is still a good
          introduction. The new official docs on hooks are available{" "}
          <a href="https://react.dev/learn#using-hooks">here</a> as well as
          everything React.{" "}
        </p>
      </div>
      <div className="text-white bg-zinc-900 p-3 border border-zinc-100 inline-block w-1/6 rounded shadow shadow-black/60">
        <p className="underline font-semibold">Commonly used hooks</p>
        <ul className="text-left list-disc pl-4">
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useCallback</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
