export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
