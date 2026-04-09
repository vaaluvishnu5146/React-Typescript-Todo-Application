import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function AuthLayout() {
  return (
    <div>
      <main className="p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
