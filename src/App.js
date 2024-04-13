import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Admin from "./components/Admin";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
