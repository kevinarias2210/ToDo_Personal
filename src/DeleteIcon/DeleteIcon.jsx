import React from "react";
import { TodoIcon } from '../TodoIcon/TodoIcon';

function DeleteIcon({ onDelete }){
    return(
        <TodoIcon type="delete" color="#B3D5DD" onClick={onDelete}/>
    );
}

export { DeleteIcon }