import React from "react";
import {TodoContext} from '../TodoContext/TodoContext';
import './TodoForm.css';

function TodoForm(){
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)

    const [newTodoValue, setTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); 
        setOpenModal(false);
    };

    const onCancel = (event) => {
        event.preventDefault(); 
        setOpenModal(false);
    };

    const onChange = (event) => {
        setTodoValue(event.target.value);
    }

    return(
        <form className="form"
        onSubmit={(onSubmit)}>
            <div className="form__container">
                <label className="form__label">Escribe tu nueva tarea</label>
                <textarea className="form__textArea" 
                placeholder="ejemplo: cortar cebolla" 
                value={newTodoValue}
                onChange={onChange}
                />
                <div className="form__container--Botones">
                    <button className="TodoForm__btnCancel" 
                    type="button"
                    onClick={onCancel}
                    >Cancelar</button>
                    <button className="TodoForm__btnAdd" 
                    type="submit"
                    >Agregar TODO</button>
                </div>
            </div>
        </form>
    )
}

export { TodoForm }