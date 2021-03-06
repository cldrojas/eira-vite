import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
