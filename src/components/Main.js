import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../reducers/ProductsSlice";
import { openCart } from "../reducers/ToggleCartSlice";
import { addToCart } from "../reducers/CartSlice";

const Main = () => {
  const stateProducts = useSelector(allProducts);
  const dispatch = useDispatch();

  return (
    <>
      {stateProducts.map((item) => {
        return (
          <article className="product" key={item.id}>
            <div className="product-container">
              <img
                src={item.fields.image[0].thumbnails.large.url}
                className="product-img img"
                alt={item.fields.name}
              />
              <div className="product-icons">
                <Link to={`/products/${item.id}`} className="product-icon">
                  <i className="fas fa-search"></i>
                </Link>
                <button
                  onClick={() => {
                    dispatch(openCart());
                    dispatch(addToCart(item));
                  }}
                  className="product-cart-btn product-icon "
                  data-id="rec43w3ipXvP28vog"
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
              <footer>
                <p className="product-name">{item.fields.name}</p>
                <h4 className="product-price">${item.fields.price / 100}</h4>
              </footer>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default Main;
