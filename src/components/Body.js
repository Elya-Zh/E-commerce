import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFilter,
  filterCategory,
  filterByRange,
  allProducts
} from "../reducers/ProductsSlice";
import "../App.css";
import Main from "./Main";

function Body() {
  const products = useSelector(allProducts);
  console.log(products.length, "");
  const dispatch = useDispatch();
  const [range, setRange] = useState(50);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    dispatch(searchFilter(e.target.value));
  };

  const handleCategory = (category, e) => {
    dispatch(filterCategory(category));
    const btns = e.target.parentElement.children;
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].innerText.toLowerCase() === category) {
        btns[i].classList.add("active-btn");
      } else {
        btns[i].classList.remove("active-btn");
      }
    }
  };

  const handleRange = (e) => {
    setRange(e.target.value);
    dispatch(filterByRange(range));
  };
  return (
    <section className="products">
      {/* filters */}
      <div className="filters">
        <div className="filters-container">
          {/* search */}
          <form className="input-form">
            <input
              type="text"
              className="search-input"
              value={searchVal}
              placeholder="search..."
              onChange={handleSearch}
            />
          </form>
          {/* categories */}
          <h4>Company</h4>
          <article className="companies">
            <button
              onClick={(e) => handleCategory("all", e)}
              className="company-btn active-btn"
            >
              all
            </button>
            <button
              onClick={(e) => handleCategory("ikea", e)}
              className="company-btn"
            >
              ikea
            </button>
            <button
              onClick={(e) => handleCategory("liddy", e)}
              className="company-btn"
            >
              liddy
            </button>
            <button
              onClick={(e) => handleCategory("marcos", e)}
              className="company-btn"
            >
              marcos
            </button>
            <button
              onClick={(e) => handleCategory("caressa", e)}
              className="company-btn"
            >
              caressa
            </button>
          </article>
          {/* price */}
          <h4>Price</h4>
          <form className="price-form">
            <input
              type="range"
              className="price-filter"
              min="0"
              value={range}
              max="100"
              onChange={handleRange}
            />
          </form>
          <p className="price-value">Value: ${range}</p>
        </div>
      </div>
      <div className="products-container">
        {products.length === 0 && (
          <h3 class="filter-error">sorry, no products matched your search</h3>
        )}
        <Main />
      </div>
    </section>
  );
}

export default Body;
