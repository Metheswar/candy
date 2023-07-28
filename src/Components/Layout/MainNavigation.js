import { Link, Navigate, useNavigate } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import Context from '../../Store/Context';

const MainNavigation = () => {
  const context = useContext(Context);
  const navigate = useNavigate();
  const login = context.login;
  const switchAuthModeHandler = ()=>{
    context.loginHandler();
    navigateHandler();
  };
  const navigateHandler=()=>{
    navigate('/auth')
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
     {!login &&  <li>
            <Link to='/auth'>Login</Link>
          </li>}
         {login &&  <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          <li>
            {login && <button onClick={switchAuthModeHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
