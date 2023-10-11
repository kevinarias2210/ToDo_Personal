import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setBuscarValue
}){
    return(
      <input placeholder="Busca una tarea"
      value={searchValue}
      onChange={(event)=> {
        setBuscarValue(event.target.value);
      }}/>
    );
  }

  export { TodoSearch };