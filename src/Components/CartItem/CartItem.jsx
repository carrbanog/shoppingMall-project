import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import { CiCircleRemove } from "react-icons/ci";
import useProducts from "../Assets/all_product2";
import { useCart } from "../../Context/GraphContext";

const CartItem = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    setCartItems,
  } = useContext(ShopContext);
  const { fakeProducts } = useProducts();
  const { addToCartItems } = useCart();
  // console.log(getTotalCartAmount)
  const handlePay = (cartItems) => {
    const cartItemsArray = Object.keys(cartItems)
      .map((key) => ({
        id: parseInt(key), // 키를 숫자로 변환하여 id로 사용
        quantity: cartItems[key], // 값으로 수량 설정
      }))
      .filter((item) => item.quantity > 0); // 수량이 0인 아이템은 제외
    addToCartItems(cartItemsArray);
    // setCartItems((prev) => ({}));
    console.log(cartItemsArray); // 배열로 변환된 결과 출력
  };
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {fakeProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="carticon-product-icon" />
                <p>{e.title}</p>
                <p>${e.price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.price * cartItems[e.id]}</p>
                <CiCircleRemove
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              {/* <p>Shipping Fee</p>
              <p>Free</p> */}
              {getTotalCartAmount() > 50 ? (
                <p>Shipping Free</p>
              ) : (
                <>
                  <p>delivery fee</p>
                  <p>$5</p>
                </>
              )}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                $
                {getTotalCartAmount() > 0 && getTotalCartAmount() < 50
                  ? getTotalCartAmount() + 5
                  : getTotalCartAmount()}
              </h3>
            </div>
          </div>
          <button onClick={() => handlePay(cartItems)}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a prome code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
