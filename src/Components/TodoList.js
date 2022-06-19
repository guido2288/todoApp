import React , {  useState } from 'react';
import '../StyleSheet/TodoList.css'
import { ItemsLeft } from './ItemsLeft';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';


export const TodoList = () => {

  const [todos , setTodo] = useState([]);

  const [count , setCount] = useState(0);

 
  const addTodo = todo => {
    if( todo.text.trim() ) {
      todo.text = todo.text.trim();
      const todosUpdated = [ todo, ...todos ];
      setTodo(todosUpdated);
      setCount(todos.filter(todo => todo.complete === false).length +1) 
      
  };

}

  const deleteTodo = id => {
    const todosUpdated = todos.filter( todo => todo.id !== id );
    setTodo(todosUpdated);
    setCount(todos.filter(todo => todo.complete === false).length) 
  };
  
  const completeTodo = id => {
    const todosUpdated = todos.map(todo => {
      if ( todo.id === id ) {
        todo.complete = true
      };
      return todo;
    });

    setTodo(todosUpdated);

    setCount(todos.filter(todo => todo.complete === false).length)
  };

  const clearComplete = todo => {
    const todosUpdated = todos.filter( todo => todo.complete === false );
    setTodo(todosUpdated);
  }

  return (
    <>

      <TodoForm onSubmit={addTodo}/>
      <div className='todo-list-main-container'>
        
        {
          todos.map((todo) =>
            <Todo 
              key={todo.id}
              id={todo.id}
              text={todo.text}
              complete={todo.complete}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              clearComplete={clearComplete}
            />
          )
        }
      <footer>
        <ItemsLeft 
          className='itemsLeft'
          count={count}
           />

        <div className='clear-container'>
          <p onClick={clearComplete}>Clear Completed</p>
        </div>

      </footer>
      </div>


    </>
  )
}

