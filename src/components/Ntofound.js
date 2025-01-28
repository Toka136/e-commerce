import { Link } from "react-router-dom";
import './Notfound.css'
function Notfound()
{
    return(
        <>
        <div className="linksnotfound">
           <span >Home</span> / <span>404 Error</span>
        </div>
        <div className="ps">
        <p className="error">404 Not Found</p>
        <p>Your visited page not found. You may go home page.</p>
        </div>
        <div className="viewprod_cont">
            <Link to={'/'} className="viewprod">
            back to home page
            </Link>
        </div>
        </>
    )
}
export default Notfound;