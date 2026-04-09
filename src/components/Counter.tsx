import { useState, useCallback, useEffect, useMemo } from "react";
import CounterForm from "./CounterForm";

export default function Counter() {
  const [count, setCount] = useState(0);
  const N = 1000;

  const sum = useMemo(() => {
    console.log("Called A");
    return countTillN(N);
  }, [N]);

  function countTillN(N = 1000) {
    console.log("Called B");
    var sum = 0;
    for (let i = 1; i <= N; i++) {
      sum += i;
    }
    return sum;
  }

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="flex gap-5 items-center">
      <p>{count}</p>
      <p>{sum}</p>
      <CounterForm increment={handleIncrement} decrement={handleDecrement} />
    </div>
  );
}
