
import Context from "./Context";
import React, { useState } from 'react'
const ContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const[login,setLogin] = useState(false)
    


    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
       
      };
      const loginHandler = (token) =>{
        const valid = !!token;
      if(valid){
        setLogin((prevState) => !prevState)
      }else{
       setLogin(false)
      }
      }
      const obj ={
        isLogin:isLogin,
        switchAuthModeHandler:switchAuthModeHandler,
        login:login,
        loginHandler:loginHandler
      }

  return (
    <Context.Provider value={obj}>
        {props.children}
    </Context.Provider>
  )
}

export default ContextProvider