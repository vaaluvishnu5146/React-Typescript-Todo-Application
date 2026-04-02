import { useState } from "react";
import ProductListItem from "../elements/ProductListItem";
import Cart from "../elements/Cart";
import type { Product, CartItem } from "../Types/Interfaces";

export default function Products() {
  const [products, setProducts] = useState<Array<Product>>([
    {
      id: 1,
      title: "Tea",
      price: 20,
      image:
        "https://png.pngtree.com/png-vector/20250830/ourmid/pngtree-indian-chai-in-clay-cup-png-image_17336367.webp",
    },
    {
      id: 2,
      title: "Coffee",
      price: 25,
      image:
        "https://as1.ftcdn.net/jpg/14/68/54/06/1000_F_1468540698_BAzz58Bir0HI90DJRvZ9MGngPbEaHiU4.jpg",
    },
    {
      id: 3,
      title: "Milk",
      price: 15,
      image:
        "https://img.freepik.com/premium-photo/cup-milk-is-saucer-with-saucer-saucer_999340-57160.jpg",
    },
  ]);
  const [cart, setCart] = useState<Array<CartItem>>([]);

  function addToCart(product: Product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  return (
    <div>
      {products.map((product) => (
        <ProductListItem
          key={`${product.title}`}
          product={product}
          addToCart={addToCart}
          isAddedToCart={cart.find((p) => p.id === product.id) ? true : false}
        />
      ))}
      <Cart data={cart} />
    </div>
  );
}
