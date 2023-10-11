import { ReactComponent as LikeSvg } from './check.svg';
import { ReactComponent as DeleteSvg } from './delete.svg';

const iconTypes = {
    /*La propiedad fill es un nombre que le definimos para guardar el 
    parametro del color */
    "like": (color) => <LikeSvg className='likeSvg' fill={color}/>,
    "delete": (color) => <DeleteSvg className='deleteSvg' fill={color}/>,
}

function TodoIcon({ type, color, onClick }){
    return(
        <span className={`${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };