import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div className="h-screen app-layout">
      <Header />
      <main className="h-[90%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
