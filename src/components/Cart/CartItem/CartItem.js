import React, {useState, useEffect} from "react";
import styles from "./CartItem.module.css";
import {useDispatch} from "react-redux";
import {removeFromCart, adjustQty} from "../../../redux/shopping/shoping-actions";

const CartItem = ({ cart }) => {
 const dispatch = useDispatch();
 const [quantity, setQuantity] = useState(cart.qty);

 const quantityHandler = (e)=>{
   setQuantity(e.target.value)
   dispatch(adjustQty(cart.id, e.target.value))  
 }

  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image} src={cart.image} />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{cart.title}</p>
        <p className={styles.details__desc}>{cart.description}</p>
        <p className={styles.details__price}>$ {cart.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={quantity} onChange={(e)=>quantityHandler(e)} />
        </div>
        <button onClick={()=>{dispatch(removeFromCart(cart.id))}} className={styles.actions__deleteItemBtn}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
