import React from "react";
import { TodoIcon } from '../TodoIcon/TodoIcon';

function CompleteIcon({ completed, onLike }){
    return(
        <TodoIcon type="like" color= {completed ? 'green' : 'gray'} 
        onClick={onLike}/>
    );
}

export { CompleteIcon };