import { Link } from "react-router-dom"
import Logout from "./Logout"
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import WishList from '../Wish-atom';
import cart from "../Cart-atom";

function PersonInfo()
{
    const [WLIST,setWLIST]=useRecoilState(WishList);
    const [Cart,setCart]=useRecoilState(cart);
    const [size,setsize]=useState(0);
    const [csize,setcsize]=useState(0);
    useEffect(()=>
        {
            setsize(WLIST.length)
        },[WLIST])
    useEffect(()=>
        {
            setcsize(Cart.length)
        },[Cart])
    return(
        <>
        <div className="icons_person">
        <div>
            <span>
        {size}
            </span>
                <Link to="/wish"className="fa-regular fa-heart"></Link>
                </div>
                <div>
                <span>
            {csize}
            </span>
        <Link to={"cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
        <div className="dropdown">
            <button className="btn person_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-user"></i>
            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button"><i className="fa-regular fa-user"></i><Link to={'/profile'}>Manage My Account</Link></button></li>
                <li><Link to ={'/cart'} className="dropdown-item" type="button"><i className="fa-solid fa-bag-shopping"></i><p>My Order</p></Link></li>
                <li><button className="dropdown-item" type="button"><i className="fa-regular fa-circle-xmark"></i><p>My Cancellations</p></button></li>
                <li><button className="dropdown-item" type="button"><i className="fa-regular fa-star"></i><p>My Review</p></button></li>
                <li><Link className="dropdown-item" type="button" to={"/logout"}><i className="fa-solid fa-right-from-bracket"></i><p>Log Out</p></Link></li>
            </ul>
        </div>

        </div>
        </>
    )
}
export default PersonInfo