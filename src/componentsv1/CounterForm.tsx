import { Button } from "flowbite-react";
import React from "react";

function CounterForm({
  increment,
  decrement,
}: {
  increment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <Button color="green" pill onClick={decrement}>
        -
      </Button>
      <Button color="green" pill onClick={increment}>
        +
      </Button>
    </>
  );
}

export default React.memo(CounterForm);
