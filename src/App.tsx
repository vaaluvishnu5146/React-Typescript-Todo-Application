import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskTracker from "./pages/TaskTracker";
import Tags from "./pages/Tags";
import Archived from "./pages/Archived";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[90%] p-5">
        <Routes>
          <Route path="/" Component={TaskTracker} />
          <Route path="/tags" Component={Tags} />
          <Route path="/archived" Component={Archived} />
          <Route path="/settings" Component={Settings} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
