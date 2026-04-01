import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import OrdersCount from "../componentsv1/OrdersCount";

export default function Orders(props: { message: string }) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="app">
      <Sidebar message="Sidebar" />
      <main className="main">
        <Header message="Sidebar page" />
        <div className="content">
          <h1>Orders</h1>
          <h2>{count}</h2>
          <OrdersCount count={count} countChange={setCount} />
        </div>
        <Footer message="All copyright reserved" />
      </main>
    </div>
  );
}
