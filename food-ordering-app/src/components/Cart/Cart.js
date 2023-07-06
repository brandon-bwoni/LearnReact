import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submited, setIsSubmited] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
    setIsSubmited(true);
    cartCtx.clearCart();
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch('https://meals-caaeb-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    });
    setIsSubmitting(false);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />;
      })}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
  </div>;

  const cartModalContent = (<React.Fragment>
    {cartItems}
    <div>
      <span className={classes.total}>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isCheckout && modalActions}
  </React.Fragment>);

  const isSubmittingModalContent = <p>Sending order data</p>;

  const submitedModalContent = <React.Fragment>
    <p>Successfully sent the order!</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>Close</button>
    </div>;

  </React.Fragment>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !submited && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submited && submitedModalContent}
    </Modal>
  );
};

export default Cart;