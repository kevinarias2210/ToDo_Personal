import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setBuscarValue,
    getSearch,
    loading,
    error,
    completeTodo,
    deleteTodo}
){
    return(
        <>
      <TodoCounter completed = { completedTodos }  total = { totalTodos }/>
      <TodoSearch 
        searchValue = { searchValue }
        setBuscarValue = { setBuscarValue }
        /* getSearchValue = { getSearch } */
      />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && getSearch.length === 0) && <TodosEmpty />}

        { getSearch.map(todo => (
          <TodoItem key={ todo.text } text={ todo.text } 
          completed={todo.completed} onComplete = { () => {
            completeTodo(todo.text)
            } 
          }
          onDelete = { () => {
            deleteTodo(todo.text)
            } 
          }
          />
        )
    
          /* return(
            <TodoItem />
          ) esta parte es lo mismo que el anterior, solo se reduce gracias a
          ecmascript 6 */
        )}
      </TodoList>
    
      <CreateTodoButton />
    </>
    )
}

export { AppUI }