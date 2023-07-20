import React, { useState } from 'react'
import Context from './Context'
import Cart from '../Components/Cart'

const ContextProvider = (props) => {
    const[candy,setCandy] = useState('')
    const[cart,setCart] = useState([])
    const[description,setDescription] = useState('')
    const [amount,setamount] = useState('')
    const[cartdisplay,setdisplay] = useState(false)
    const obj = [];
    const[candyobj,setcandyobj] = useState(obj)
    const candyHandler = (event) =>{
        setCandy(event.target.value)
    }
    const descHandler = (event) =>{
        setDescription(event.target.value)
    }
    const amountHandler = (event) =>{
        setamount(event.target.value)
    }
    const submitHandler = () =>{
        const newobj = {
            amount:amount,
            candy:candy,
            description:description,
            key:Math.random()
        }
        setcandyobj([...candyobj,newobj])
    }
    const cartHandler = (candy, desc, itemamount, quantity, key) => {
        const existingCartItem = cart.find((item) => item.key === key);
        if (existingCartItem) {
          // If the item with the same key already exists, update the quantity and amount
          existingCartItem.quantity += quantity;
          existingCartItem.amount = itemamount * existingCartItem.quantity;
          setCart([...cart]);
        } else {
          const newcart = {
            candy: candy,
            description: desc,
            amount: itemamount * quantity,
            quantity: quantity,
            key: key,
          };
          setCart([...cart, newcart]);
        }
      };
    const cartDisplayHandler = () =>{
        setdisplay(!cartdisplay)
    }
    
    const contextobj = {
            candyHandler:candyHandler,
            descHandler:descHandler,
            amountHandler:amountHandler,
            submitHandler:submitHandler,
            cartHandler:cartHandler,
            cartDisplayHandler:cartDisplayHandler,
            cart:cart,
            amount:amount,
            candy:candy,
            description:description,
            candyobj:candyobj

    }

  return (
    <Context.Provider value={contextobj}>
        {cartdisplay ? <Cart/> : props.children}
    </Context.Provider>
  )
}

export default ContextProvider