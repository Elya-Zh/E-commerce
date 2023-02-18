import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../reducers/CartSlice";
import { openCart } from "../reducers/ToggleCartSlice";
import { openNav } from "../reducers/ToggleNavSlice";

function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  const inCart = useSelector(selectCart);
  const dispatch = useDispatch();
  const splitLocation = pathname.split("/");
  const counter = inCart.reduce((acc, el) => acc + el.count, 0);

  return (
    <>
      <nav className="navbar page">
        <div className="nav-center">
          {/* links */}
          <div>
            <button className="toggle-nav" onClick={() => dispatch(openNav())}>
              <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-links">
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link
                  to="/"
                  className="nav-link"
                  style={
                    splitLocation[1] === "products" ||
                    splitLocation[1] === "about"
                      ? { color: "black" }
                      : { color: "white" }
                  }
                >
                  {" "}
                  home{" "}
                </Link>
              </li>
              <li className={splitLocation[1] === "products" ? "active" : ""}>
                <Link
                  to="/products"
                  className="nav-link"
                  style={
                    splitLocation[1] === "products" ||
                    splitLocation[1] === "about"
                      ? { color: "black" }
                      : { color: "white" }
                  }
                >
                  {" "}
                  products{" "}
                </Link>
              </li>
              <li className={splitLocation[1] === "about" ? "active" : ""}>
                <Link
                  to="/about"
                  className="nav-link"
                  style={
                    splitLocation[1] === "products" ||
                    splitLocation[1] === "about"
                      ? { color: "black" }
                      : { color: "white" }
                  }
                >
                  {" "}
                  about{" "}
                </Link>
              </li>
            </ul>
          </div>
          {/* logo */}

          {splitLocation[1] === "products" || splitLocation[1] === "about" ? (
            <img
              src="https://vanilla-js-store.netlify.app/images/logo-black.svg"
              className="nav-logo"
              alt="logo"
            />
          ) : (
            <img
              src="https://vanilla-js-store.netlify.app/images/logo-white.svg"
              className="nav-logo"
              alt="logo"
            />
          )}

          {/* cart icon */}
          <div className="toggle-container">
            <button className="toggle-cart">
              <i
                className="fas fa-shopping-cart"
                style={
                  splitLocation[1] === "products" ||
                  splitLocation[1] === "about"
                    ? { color: "black" }
                    : { color: "white" }
                }
                onClick={() => dispatch(openCart())}
              ></i>
            </button>
            <span className="cart-item-count">{counter}</span>
          </div>
        </div>
      </nav>

      {splitLocation[1] === "products" || splitLocation[1] === "about" ? (
        <Hero query={splitLocation[1] === "products" ? "products" : "about"} />
      ) : null}
    </>
  );
}

export default NavBar;
