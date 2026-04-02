import type { Product } from "../Types/Interfaces";

export default function ProductListItem({
  product,
  addToCart,
  isAddedToCart,
}: {
  product: Product;
  addToCart: (id: Product) => void;
  isAddedToCart: boolean;
}) {
  return (
    <div className="product_list_item" id={`${product.id}`}>
      <img className="product_image" src={product.image} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        {!isAddedToCart && (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
}
