import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);

  const [items, setItems] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let itemCart = 0;
    let priceCart = 0;
    cart.forEach(
      (item) => ((itemCart += item.qty), (priceCart += item.qty * item.price))
    );
    setItems(itemCart);
    setPrice(priceCart)
  }, [cart, price, setPrice, items, setItems]);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem cart={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({items})</span>
          <span>$ {price}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
