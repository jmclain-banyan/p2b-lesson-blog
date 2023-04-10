import React from "react";
import example1 from "assets/images/useEffect-syntax.png";

const UseEffect = () => {

  return (
    <article className="mt-10 pb-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">useEffect</h2>
        <p>
          The
          <span className="inline-code">useEffect</span>
          is a React Hook that lets you synchronize a component with an external
          system.
        </p>
        <p>
          It is used in place of lifecycle methods used in class components,
          such as <span className="inline-code">componentDidMount</span> and{" "}
          <span className="inline-code">componentShouldUpdate</span>.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">Syntax</h3>
        <img src={example1} alt="example" />
        <p>
          <span className="inline-code">useEffect</span> takes two arguments.
          The first is a callback function. That is where your logic goes that
          you need to preform. The second is the dependency array. If left empty
          the hook will only invoke the callback once when component mounts. If
          there dependencies listed anytime one is updated the callback will be
          invoked. This will only be triggered by primitive data type. This such
          as arrays and object literals are evaluated as their type and the hook
          will not know if the contained content has changed.
        </p>
      </div>
      <div></div>
    </article>
  );
};

export default UseEffect;
