import React from "react";
import { TodoIcon } from '../TodoIcon/TodoIcon';

function CompleteIcon({ completed, onLike }){
    return(
        <TodoIcon type="like" color= {completed ? '#013201' : '#B3D5DD'} 
        onClick={onLike}/>
    );
}

export { CompleteIcon };