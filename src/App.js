import "./App.css";
import Home from "./Comps/Home/Home";
import Navbar from "./Comps/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./Comps/Products/Products";
import Cart from "./Comps/Cart/Cart.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
