import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
