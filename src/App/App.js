import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'Tomar el curso', completed: false},
  { text: 'llorar', completed: false},
  { text: 'lAla', completed: false},
  { text: 'jugar', completed: false},
  { text: 'play', completed: true},
];

localStorage.setItem('todos_V1', JSON.stringify(defaultTodos)); */
/* localStorage.removeItemItem('todos_V1', defaultTodos); */

function App() {
  const {
    item: arrayTodos, 
    saveItems: saveTodos, 
    loading, error} = useLocalStorage('todos_V1', []);
  
  const [searchValue, setBuscarValue] = React.useState('');

  const completedTodos = arrayTodos.filter(
    objetos => !!objetos.completed).length; /*Se utiliza la negación para
      que la respuesta que de sea cual sea (0, string, true, false, null,
      undefinded) de vuelva un valor booleano, va a ser lo mismo aunque 
      no tenga la doble negación*/
  const totalTodos = arrayTodos.length;
    
  const getSearch = arrayTodos.filter( 
    obj => 
    obj.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));
    /* console.log(getSearch); */

  const completeTodo = (text) => {
    const newTodos = [...arrayTodos];
    const todoIndex = newTodos.findIndex(
      (obj) => obj.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...arrayTodos];
    const todoIndex = newTodos.findIndex(
      (obj) => obj.text === text
    );
    newTodos.splice(todoIndex, 1);
    console.log(newTodos)
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setBuscarValue = {setBuscarValue}
      getSearch = {getSearch}
      loading = {loading}
      error = {error}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;