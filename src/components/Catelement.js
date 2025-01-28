import { Link } from 'react-router-dom';
import './Catelement.css'
import classNames from 'classnames';
function Catelement(props)
{
    return(
        <>
        <Link className="catprod" to={`category/${props.element.name}/${false}`} >
        <i className={classNames(props.element.icon)}></i>
        <p>{props.element.name}</p>
        </Link>
        </>
    )
}
export default Catelement;