import React from 'react';
import { useSelector } from 'react-redux';

const  Cart = () => {
 
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
       item.quantity>0?   <li key={item.id}>
            {item.title} - ${item.price} - Quantity: {item.quantity}
          </li>: <span></span>
        ))}
      </ul>
    </div>
  );
};


export default Cart;