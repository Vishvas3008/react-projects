import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckOut from "./CheckOut";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [ordering, setOrdering] = useState(false);
  const { isLoading, error, sendRequest: sendData } = useHttp();
  const [sendingOrder, setSendingOrder] = useState(false);

  const totalAmount = `$${Number(cartCtx.totalAmount).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderbuttonHandler = () => {
    setOrdering(true);
  };
  const cartFormcancelHandler = () => {
    setOrdering(false);
  };

  const UserDataHandler = async (data) => {
    console.log(data);
    sendData(
      {
        url: "https://food-v-102-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { item: cartCtx, userData: data },
      } 
      
    );
    setSendingOrder(true);
    cartCtx.clearcart();
  };
  const CloseHandler = () => {
    props.onClose();
  };
  return (
    <div>
      {sendingOrder && (
        <Modal>
          <p>Your Order Is Sent...</p>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
        </Modal>
      )}
      {!sendingOrder && (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          {ordering && (
            <CheckOut
              onUserData={UserDataHandler}
              onCloseForm={cartFormcancelHandler}
            />
          )}

          {!ordering && (
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
              {hasItems && (
                <button className={classes.button} onClick={orderbuttonHandler}>
                  Order
                </button>
              )}
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
