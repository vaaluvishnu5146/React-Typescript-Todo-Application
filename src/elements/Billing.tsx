import { useEffect, useState } from "react";
import type { CartItem } from "../Types/Interfaces";

export default function Billing({ data }: { data: Array<CartItem> }) {
  const [subTotal, setSubTotal] = useState<number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);

  useEffect(() => {
    let subTotal = data.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubTotal(subTotal);
    setGrandTotal(subTotal + subTotal * 0.18);
  }, [data]);

  return (
    <div>
      <h2>Billing</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li className="billing_item">
          <p>Subtotal:</p>
          <p>{subTotal}</p>
        </li>
        <li className="billing_item">
          <p>CGST:</p>
          <p>9%</p>
        </li>
        <li className="billing_item">
          <p>SGST:</p>
          <p>9%</p>
        </li>
        <li className="billing_item">
          <h2>Total</h2>
          <h2>{grandTotal}</h2>
        </li>
      </ul>
    </div>
  );
}
