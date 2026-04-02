const cart = [
  {
    id: 1,
    title: "Tea",
    price: 20,
    image:
      "https://png.pngtree.com/png-vector/20250830/ourmid/pngtree-indian-chai-in-clay-cup-png-image_17336367.webp",
    quantity: 5,
  },
  {
    id: 3,
    title: "Milk",
    price: 15,
    image:
      "https://img.freepik.com/premium-photo/cup-milk-is-saucer-with-saucer-saucer_999340-57160.jpg",
    quantity: 2,
  },
  {
    id: 2,
    title: "Coffee",
    price: 25,
    image:
      "https://as1.ftcdn.net/jpg/14/68/54/06/1000_F_1468540698_BAzz58Bir0HI90DJRvZ9MGngPbEaHiU4.jpg",
    quantity: 3,
  },
];

function calculateTotal(cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

function calculateTotalV2(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

console.log(calculateTotal(cart));
console.log(calculateTotalV2(cart));

const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((a, b) => a + b);
console.log(sum);
