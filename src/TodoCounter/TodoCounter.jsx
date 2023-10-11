import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);  

  return(
    <h1>
      Has completado { completedTodos } de { totalTodos } ToDo's
    </h1>
  );
}

export { TodoCounter };