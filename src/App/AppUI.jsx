import React, { useContext } from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { TodosEmpty } from '../TodosEmpty/TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal"; 
import { TodoForm } from '../TodoForm/TodoForm';

function AppUI(){
  const {
    getSearch,
    loading,
    error,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
    return(
      <>
        <TodoCounter/>
        <TodoSearch />

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

        {/* <TodoContext.Consumer>
          {({
            getSearch,
            loading,
            error,
            completeTodo,
            deleteTodo
          }) => (
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
              )}
            </TodoList>
          )}
        </TodoContext.Consumer> */}
      
        <CreateTodoButton setOpenModal={setOpenModal}/>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </>
    )
}

export { AppUI }