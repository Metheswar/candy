import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import './Cart.css'; // Import the CSS file for cart styling
import Context from '../Store/Context';

const Cart = () => {
  const context = useContext(Context);

  // Function to calculate the total amount in the cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    context.cart.forEach((item) => {
      totalAmount += item.amount;
    });
    return totalAmount;
  };

  return createPortal(
    <div className="cart-overlay">
      <div className="cart-content">
        <h2>Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Candy</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {context.cart.map((item) => (
              <tr key={item.candy}>
                <td>{item.candy}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.amount} rs</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3"><h3>Total Amount:</h3></td>
              <td>{calculateTotalAmount()} rs</td>
            </tr>
          </tfoot>
        </table>
        <button onClick={context.cartDisplayHandler}>Close</button>
      </div>
    </div>,
    document.getElementById('cart-root')
  );
};

export default Cart;
