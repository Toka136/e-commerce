// import { isVisible } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import'./Sidebar.css'
import { Link } from 'react-router-dom';
function Sidebar()
{
        const [isVisible, setIsVisible] = useState(false);
         const toggleSidebar = () => {
        setIsVisible(!isVisible);
      };      
    return(
        <>
        <div className="list">
             <div className='icon-list' onClick={toggleSidebar}>
            <i class="fa-solid fa-angles-right"></i>
            </div>
            <ul className={isVisible?'show2':""}>
           
                 <li>
                    <Link to="fashion/women's clothing" >Woman’s Fashion</Link>
                </li>
                <li>
                    <Link to={"fashion/men's clothing"}>Men’s Fashion</Link>
                    </li>
                    <li>
                    <Link to ={"fashion/electronics"}>Electronics</Link>
                    </li>
                    <li>
                    <Link to ={"fashion/jewelery"}>jewelery</Link>
                    </li>
                    <li>
                    <Link to={"fashion/sport"}>Sports & Outdoor</Link>
                    </li>
                    <li>
                    <Link to={"fashion/toys"}>Baby’s & Toys</Link>
                    </li>
                    <li>
                    <Link to={"fashion/Animal Food"}>Groceries & Pets</Link>
                    </li>
                    <li>
                    <Link to={"fashion/beauty"}>Health & Beauty</Link>
                    </li>
                
            </ul>
        </div>
        </>
    )
}
export default Sidebar;