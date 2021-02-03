import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/shopping/shoping-actions";

const Product = ({ product, addToCart }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/someID`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
