import { Button } from "flowbite-react";
import React, { useState, useCallback } from "react";

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
      <CounterForm
        count={count}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </div>
  );
}

function CounterForm({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  console.log("Re-Rendering");
  return (
    <>
      <Button color="green" pill onClick={decrement}>
        -
      </Button>
      <p>{count}</p>
      <Button color="green" pill onClick={increment}>
        +
      </Button>
    </>
  );
}
