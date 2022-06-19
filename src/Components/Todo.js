import React from 'react';
import deleteIcon from '../images/icon-cross.svg';
import iconCheck from '../images/icon-check.svg';
import '../StyleSheet/Todo.css';
;


export const Todo = ( { id, text , complete , completeTodo , deleteTodo} ) => {
  return (
    <div className='todo-container'>
      <div 
        className={ complete ? 'icon-check-container complete' : 'icon-check-container'} 
        onClick={() => completeTodo(id)} >
        <img 
          src={iconCheck}
          alt='icon-check.svg'
          className='icon-check' 
          onClick={() => completeTodo(id)} />
      </div>

      <div 
        className={ complete ? 'todo-text complete' : 'todo-text'}
        onClick={() => completeTodo(id)} >
        {text}
      </div>
      <div 
        className='delete-icon-container'
        onClick={() => deleteTodo(id)} >
        <img 
          src={deleteIcon}
          alt='icon-cross.svg'
          className='icon-delete' />
      </div>
    </div>
  )
}

