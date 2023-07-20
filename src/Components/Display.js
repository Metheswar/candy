import React, { useContext } from 'react';
import Context from '../Store/Context';

const Display = () => {
  const context = useContext(Context);

  return (
    <div>
      {context.candyobj.map((candylist) => (
        <h3 key={candylist.key}>
          <span>{candylist.candy}</span>-<span>{candylist.description}</span>-<span>{candylist.amount}</span>
          <span> <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 1,candylist.key)}>buy 1</button></span>  
          <span> <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 2,candylist.key)}>buy 2</button></span>
          <span> <button onClick={() => context.cartHandler(candylist.candy, candylist.description, candylist.amount, 3,candylist.key)}>buy 3</button></span>
        </h3>
      ))}
    </div>
  );
};

export default Display;
