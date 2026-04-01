// FUNCTIONAL COMPONENT
function OrdersCount(props: {
  count: number;
  countChange: (count: number) => void;
}) {
  return (
    <div>
      <button
        className="counter"
        onClick={() => props.countChange(props.count - 1)}
      >
        -
      </button>
      <button
        className="counter"
        onClick={() => props.countChange(props.count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default OrdersCount;
