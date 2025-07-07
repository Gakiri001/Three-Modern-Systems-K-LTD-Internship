import "./assets/global.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route element={<Register />} path="/" />
    </Routes>
  );
}

export default App;
