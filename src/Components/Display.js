import React, { useContext } from 'react';
import Context from '../Store/Context';
import './Display.css'; // Import the CSS file for table styling

const Display = () => {
  const context = useContext(Context);

  return (
    <div>
      <table className="candy-table">
        <thead>
          <tr>
            <th>Candy</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {context.candyobj.map((candylist) => (
            <tr key={candylist.key}>
              <td>{candylist.candy}</td>
              <td>{candylist.description}</td>
              <td>{candylist.amount}</td>
              <td>
                <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 1, candylist.key)}>buy 1</button>
                <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 2, candylist.key)}>buy 2</button>
                <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 3, candylist.key)}>buy 3</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
