import React, { useState } from 'react';
import iconCheck from '../images/icon-check.svg';
import '../StyleSheet/TodoForm.css';
import { v4 as uuidv4 } from 'uuid';


export const TodoForm = ( props ) => {

  const [input , setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSend = e => {
    e.preventDefault();
    
    const newTodo = {
      id: uuidv4(),
      text: input,
      complete: false
    }

   props.onSubmit(newTodo);
  }

  return (
    <div className='TodoForm'>

        <div className='icon-check-container' >
        <img 
          src={iconCheck}
          alt='icon-check.svg'
          className='icon-check' 
          onClick={ handleSend }  />
        </div>
      <form 
        onSubmit={ handleSend }  >
      <input 
          className='todo-input'
          type='text'
          placeholder='Create a new todo...'
          name='text'
          onChange= { handleChange }
        />  
      </form>
    </div>
  )
}


