import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';

import './TodoItem.css';


function TodoItem(props){
    return(
      <li className="form__ul--li">
        <CompleteIcon completed={ props.completed } 
        onLike={props.onComplete}/>

        <p className={`p ${props.completed && `p__complete`}`}>{props.text}</p>
        
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

  export { TodoItem };