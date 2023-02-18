import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openCart } from "../reducers/ToggleCartSlice";
import { addToCart } from "../reducers/CartSlice";
import { data } from "../products";

const Products = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  return (
    <>
      {data.map(
        (item) =>
          item.id === itemId && (
            <section className="single-product">
              <div className="section-center single-product-center">
                <img
                  src={item.fields.image[0].thumbnails.large.url}
                  alt="product"
                />
                <article className="single-product-info">
                  <div>
                    <h2 className="single-product-title">{item.fields.name}</h2>
                    <p className="single-product-company text-slanted">
                      by {item.fields.company}
                    </p>
                    <p className="single-product-price">
                      ${item.fields.price / 100}
                    </p>
                    <div className="single-product-colors">
                      {item.fields.colors.map((el) => {
                        return (
                          <span
                            className="product-color"
                            style={{ backgroundColor: el }}
                          ></span>
                        );
                      })}
                    </div>
                    <p className="single-product-desc">
                      Cloud bread VHS hell of banjo bicycle rights jianbing
                      umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist
                      yr dreamcatcher waistcoat, authentic chillwave trust fund.
                      Viral typewriter fingerstache pinterest pork belly
                      narwhal. Schlitz venmo everyday carry kitsch pitchfork
                      chillwave iPhone taiyaki trust fund hashtag kinfolk
                      microdosing gochujang live-edge
                    </p>
                    <button
                      onClick={() => {
                        dispatch(openCart());
                        dispatch(addToCart(item));
                      }}
                      className="addToCartBtn btn"
                      data-id="id"
                    >
                      add to cart
                    </button>
                  </div>
                </article>
              </div>
            </section>
          )
      )}
    </>
  );
};

export default Products;
