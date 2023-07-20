import React, { useContext } from 'react'
import Context from '../Store/Context'
import Display from './Display';

const InputForm = () => {
    const context = useContext(Context);
  return (
    <div>
        <label htmlFor='candy'>candy name:</label>
        <input type='text' id='candy' onChange={context.candyHandler} ></input>
        <br></br>
        <br></br>
        <label htmlFor='description' >description:</label>
        <input type='text' id='description' onChange={context.descHandler}></input>
        <br></br>
        <br></br>
        <label htmlFor='amount' >amount:</label>
        <input type='number' id='amount' onChange={context.amountHandler}></input>
        <br></br>
        <br></br>
        <button onClick={context.submitHandler}>add</button>
        <Display />
    </div>
  )
}

export default InputForm