import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Service from "./pages/Services";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/service">Services</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
        <Route path="/service" Component={Service} />
      </Routes>
    </div>
  );
}

export default App;
