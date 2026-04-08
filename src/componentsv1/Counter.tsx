import { Button } from "flowbite-react";
import { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let counter = useRef(0);
  return (
    <div className="flex gap-5 items-center">
      <Button
        color="green"
        pill
        onClick={() => {
          // setCount((prev) => prev - 1);
          counter.current -= 1;
        }}
      >
        -
      </Button>
      <p>{count}</p>
      <p>{counter.current}</p>
      <Button
        color="green"
        pill
        onClick={() => {
          // setCount((prev) => prev + 1);
          counter.current += 1;
        }}
      >
        +
      </Button>
    </div>
  );
}
