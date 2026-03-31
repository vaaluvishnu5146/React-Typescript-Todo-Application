import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="app">
      <Sidebar message="Home" />
      <main className="main">
        <Header message="Home Header" />
        <div className="content">
          <h1>Home</h1>
        </div>
        <Footer message="All copyright reserved" />
      </main>
    </div>
  );
}
