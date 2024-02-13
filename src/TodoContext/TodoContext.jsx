import React from "react";
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: arrayTodos, 
        saveItems: saveTodos, 
        loading, error} = useLocalStorage('todos_V1', []);
    
    const [searchValue, setBuscarValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
    
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

    const addTodo = (text) => {
        const newTodos = [...arrayTodos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    }
    
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

    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setBuscarValue,
            getSearch,
            loading,
            error,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };