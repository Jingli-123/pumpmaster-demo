import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import PrivateRoute from "./components/react-components/route-guard/PrivateRoute.tsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
          } />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
