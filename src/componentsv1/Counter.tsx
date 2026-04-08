import { useState, useCallback } from "react";
import CounterForm from "./CounterForm";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="flex gap-5 items-center">
      <p>{count}</p>
      <CounterForm increment={handleIncrement} decrement={handleDecrement} />
    </div>
  );
}
