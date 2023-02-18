import { useDispatch, useSelector } from "react-redux";
import {
  selectCart,
  decrement,
  increment,
  removeFromCart,
  popUpInfo
} from "../reducers/CartSlice";
import { toggleCart, closeCart } from "../reducers/ToggleCartSlice";

function Cart() {
  const inCart = useSelector(selectCart);
  const toggle = useSelector(toggleCart);
  const dispatch = useDispatch();

  const total = inCart.reduce(
    (acc, el) =>
      el.count > 1
        ? (acc += (el.fields.price / 100) * el.count)
        : (acc += el.fields.price / 100),
    0
  );

  return (
    <div className={toggle ? "show cart-overlay" : "cart-overlay"}>
      <aside className="cart">
        <button className="cart-close" onClick={() => dispatch(closeCart())}>
          <i className="fas fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        {/* cart items */}
        <div className="cart-items">
          {inCart.map((item) => {
            return (
              <article
                className="cart-item"
                data-id="rec8kkCmSiMkbkiko"
                key={item.id}
              >
                <img
                  src={item.fields.image[0].thumbnails.large.url}
                  className="cart-item-img"
                  alt={item.fields.name}
                />
                <div>
                  <h4 className="cart-item-name">{item.fields.name}</h4>
                  <p className="cart-item-price">${item.fields.price / 100}</p>
                  <button
                    className="cart-item-remove-btn"
                    data-id="rec8kkCmSiMkbkiko"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    remove
                  </button>
                </div>

                <div>
                  <button
                    className="cart-item-increase-btn"
                    data-id="rec8kkCmSiMkbkiko"
                    onClick={() => {
                      dispatch(increment(item));
                      dispatch(popUpInfo(item));
                    }}
                  >
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <p className="cart-item-amount" data-id="rec8kkCmSiMkbkiko">
                    {item.count}
                  </p>
                  <button
                    className="cart-item-decrease-btn"
                    data-id="rec8kkCmSiMkbkiko"
                    onClick={() => {
                      item.count <= 1
                        ? dispatch(removeFromCart(item))
                        : dispatch(decrement(item));
                    }}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {/* footer */}
        <footer>
          <h3 className="cart-total text-slanted">
            total : ${Math.abs(total.toFixed(2))}
          </h3>
          <button className="cart-checkout btn">checkout</button>
        </footer>
      </aside>
    </div>
  );
}

export default Cart;
