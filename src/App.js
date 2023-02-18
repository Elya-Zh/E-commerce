import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart";
import SideBar from "./components/SideBar";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Loading />
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/products" element={<Body />} />
          <Route path="/products/:itemId" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Cart />
        <SideBar />
      </Router>
    </div>
  );
}

export default App;
