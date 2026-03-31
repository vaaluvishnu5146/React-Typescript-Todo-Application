import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Orders(props: { message: string }) {
  return (
    <div className="app">
      <Sidebar message="Sidebar" />
      <main className="main">
        <Header message="Sidebar page" />
        <div className="content">
          <h1>Orders</h1>
        </div>
        <Footer message="All copyright reserved" />
      </main>
    </div>
  );
}
