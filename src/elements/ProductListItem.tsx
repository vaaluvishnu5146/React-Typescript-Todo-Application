import type { Product } from "../Types/Interfaces";

interface ProductListItemProps {
  product: Product;
  addToCart: (product: Product) => void;
  isAddedToCart: boolean;
  cartQuantity: number | undefined;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export default function ProductListItem({
  product,
  addToCart,
  isAddedToCart,
  cartQuantity,
  incrementQuantity,
  decrementQuantity,
}: ProductListItemProps) {
  return (
    <div className="product_list_item" id={`${product.id}`}>
      <img className="product_image" src={product.image} />
      <div className="product_details">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        {!isAddedToCart ? (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        ) : (
          <div className="quantity_controller">
            <button onClick={() => decrementQuantity(product.id)}>-</button>
            <p>{cartQuantity || 0}</p>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
