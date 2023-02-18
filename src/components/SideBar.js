import "../App.css";
import { toggleNav, closeNav } from "../reducers/ToggleNavSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const toggle = useSelector(toggleNav);
  const dispatch = useDispatch();

  return (
    <div className={toggle ? "sidebar-overlay show" : "sidebar-overlay"}>
      <aside className="sidebar ">
        {/* close */}
        <button className="sidebar-close" onClick={() => dispatch(closeNav())}>
          <i className="fas fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              className="sidebar-link"
              onClick={() => dispatch(closeNav())}
            >
              <i className="fas fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="sidebar-link"
              onClick={() => dispatch(closeNav())}
            >
              <i className="fas fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="sidebar-link"
              onClick={() => dispatch(closeNav())}
            >
              <i className="fas fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
