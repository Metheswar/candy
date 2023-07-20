import React, { useContext } from 'react';
import classes from './Header.module.css'; // Import the CSS module for styling
import Context from '../Store/Context';

const Header = () => {
  const context = useContext(Context);
  
  return (
    <div className={classes.headerContainer}>
      <h1>Candy Shop</h1>
      <button onClick={context.cartDisplayHandler} className={classes.button}>Cart</button>
    </div>
  );
};

export default Header;
