import { useState } from "react";

export default () => {
  return (
    <div className="container pt-5">
      <h3>TypeScript</h3>
      <Foo />
    </div>
  );
};

const Foo = (props) => {
  return (
    <>
      <div>Foo</div>
    </>
  );
};

/**
 * 2. primitive typer
 * 1. to måter å definere typer på
 * 1. props utypet og types
 * 2. type const
 * 3. arrya type
 * 3. state types -- generics
 * 4. unions
 * 4. lage en egen generics hook
 * 5. generic array
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
