import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch(){
  const {searchValue, setBuscarValue} = React.useContext(TodoContext)

  return(
    <input placeholder="Busca una tarea"
    value={searchValue}
    onChange={(event)=> {
      setBuscarValue(event.target.value);
    }}/>
  );
}

  export { TodoSearch };