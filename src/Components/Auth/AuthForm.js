import { useContext, useEffect, useRef, useState } from 'react';
import classes from './AuthForm.module.css';

import Context from '../../Store/Context';
import { useNavigate } from 'react-router-dom';



const AuthForm = () => {
  const context = useContext(Context);
  const EmailInputRef = useRef();
  const PasswordRef = useRef();
 const login = context.login;
 const navigate = useNavigate();


 
  const isLogin = context.isLogin;
  const switchAuthModeHandler = context.switchAuthModeHandler;
  const loginHandler = context.loginHandler;

  const SubmitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = EmailInputRef.current.value;
    const enteredPassword = PasswordRef.current.value;

    if (isLogin) {
     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsBi6XuiXEAJS8LypGcACrNuK5h8i494Y';
     try{
      const response = await fetch(url,{
        method:'POST',
        body: JSON.stringify({
          email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
        }),
        headers:{
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const data = await response.json();
       loginHandler(data.idToken);
        
      } else {
        const errorData = await response.json();
        alert(errorData.error.message);
        // Handle error during signup, if needed
      }
     } catch(error){
      console.error('Error occurred:', error);
     } finally{
      EmailInputRef.current.value = ''
        PasswordRef.current.value = ''
     }
    } else {
     const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsBi6XuiXEAJS8LypGcACrNuK5h8i494Y'; // Replace YOUR_API_KEY with your actual API key
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          switchAuthModeHandler();
          alert("Account created Successfully!!")

        } else {
          const errorData = await response.json();
          alert(errorData.error.message);
          // Handle error during signup, if needed
        }
      } catch (error) {
        // Handle any other errors that may occur during the fetch
        console.error('Error occurred:', error);
      } finally{
        EmailInputRef.current.value = ''
        PasswordRef.current.value = ''
      }
    }
  };
  useEffect(() => {
    if (login) {
      // Redirect to /profile after successful login
      navigate('/profile');
    }
  }, [login, navigate]);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={EmailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            minLength={7}
            required
            ref={PasswordRef}
          />
        </div>
        {/* The button text and functionality are fixed here */}
        {isLogin ? (
          <button type='submit' className={classes.login}>
            Login
          </button>
        ) : (
          <button type='submit' className={classes.login}>
            Sign Up
          </button>
        )}
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    
    </section>
  );
};

export default AuthForm;
