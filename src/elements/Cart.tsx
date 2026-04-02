import type { Product } from "../Types/Interfaces";

export default function Cart({ data }: { data: Array<Product> }) {
  return (
    <div className="cart_btn">
      <i className="fa-solid fa-cart-arrow-down"></i>
      <div className="count_bubble">{data.length}</div>
    </div>
  );
}
