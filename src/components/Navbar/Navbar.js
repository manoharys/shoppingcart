import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector, connect } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.shop.cart);

  const [countCart, setCountCart] = useState(0);

  useEffect(() => {
    let countItem = 0;
    cart.forEach((element) => {
      countItem += element.qty;
    });
    setCountCart(countItem);
  }, [cart, countCart]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{countCart}</div>
        </div>
      </Link>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cart: state.shop.cart,
//   };
// };

export default (Navbar);
