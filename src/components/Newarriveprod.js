import { Link } from "react-router-dom"
import './Newprod.css'
function Newarriveprod(props)
{
 return(
    <>
      <div className='newarriveprod'>
       
          <img src={props.img}/>
          <div className='txtonimg'>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <Link to="/">shop now</Link>
          </div>
        
      </div>
    </>
 )
}
export default Newarriveprod;