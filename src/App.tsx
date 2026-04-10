import { Routes, Route } from "react-router";
import TaskTracker from "./pages/TaskTracker";
import Tags from "./pages/Tags";
import Archived from "./pages/Archived";
import Settings from "./pages/Settings";
import Login from "./forms/login";
import Signup from "./forms/Signup";
import AuthLayout from "./Layout/AuthLayout";
import AppLayout from "./Layout/AppLayout";
import { useState } from "react";
import Task from "./pages/Task";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="h-screen">
      <Routes>
        {!loggedIn && (
          <Route Component={AuthLayout}>
            <Route index Component={() => <Login onLogin={setLoggedIn} />} />
            <Route path="register" Component={Signup} />
          </Route>
        )}
        {loggedIn && (
          <Route Component={AppLayout}>
            <Route index Component={TaskTracker} />
            <Route path="tags" Component={Tags} />
            <Route path="archived" Component={Archived} />
            <Route path="settings" Component={Settings} />
            <Route path="task/:id" Component={Task} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
