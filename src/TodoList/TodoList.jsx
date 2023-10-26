import './TodoList.css';

function TodoList(props){
    return(
      <ul className="form__ul">
        {props.children}
      </ul>
    );
  }

  export { TodoList };