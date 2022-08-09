import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from '../store/cartSlice'
import empty from "../images/empty-cart.png";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      <div className="heading">
        <h2>Cart</h2>
      </div>
      <div className="cartWrapper">
        {products.length > 0 &&
          products.map((product) => (
            <div className="cartCard" key={product.id}>
              <img
                className="cartProductImage"
                src={product.image}
                alt="product"
              />
              <h5>{product.title}</h5>
              <div className="priceBtnWrapper">
                <h5>${product.price}</h5>
                <button className="btn" onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
      </div>
      {products.length <= 0 && (
        <div className="emptyCart">
          <img src={empty} alt="Cart is empty!" />
        </div>
      )}
    </div>
  );
};

export default Cart;
