import { useState, useLayoutEffect, useEffect } from "react";

// FUNCTIONAL COMPONENT
function Counter() {
  const [count, setCount] = useState<number>(0);

  // ComponentWillMount
  useLayoutEffect(() => {
    console.log("ComponentWillMount");
  }, []);

  // ComponentDidMount
  useEffect(() => {
    console.log("ComponentDidMount");
    return () => {};
  }, []);

  // ComponentWillUpdate
  useLayoutEffect(() => {
    console.log("Before changing count", count);
  }, [count]);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("After changing count", count);
  }, [count]);

  return (
    <button className="counter" onClick={() => setCount(count + 1)}>
      Count is {count}
    </button>
  );
}

export default Counter;
