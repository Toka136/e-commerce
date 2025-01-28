import './Navbar.css'
import { Link, useParams } from "react-router-dom";
import PersonInfo from './PersonInfo';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jsx } from 'react/jsx-runtime';
import  currentU from "../Recoilstates";
import cart from '../Cart-atom';
import { useRecoilState } from 'recoil';
import WishList from '../Wish-atom';
function Navbar()
{
    const location = useLocation();
      const[flag,setflag]=useState(0);
      const [cUser,setcUser]=useRecoilState(currentU);
      const [cartuser,setcartuser]=useRecoilState(cart);
      const [WLIST,setWLIST]=useRecoilState(WishList);
      const [prodname,setprodname]=useState();
      const [size,setsize]=useState(0);
      const[data,setdata]=useState();
      useEffect(()=>
    {
        const user=localStorage.getItem("user");
        const cart=localStorage.getItem("cart");
        const WList=localStorage.getItem("wish");
    if(user)
    {
        setcUser(JSON.parse(user));   
        setcartuser(JSON.parse(cart));
        setWLIST(JSON.parse(WList));
        //   console.log(x.cart);
        setflag(1);
    }
    else
    {
        setcUser("No");
        setflag(0);
    }
    },[location.pathname=="/"])
    // useEffect(()=>
    //     {
    //         fetch(`https://fakestoreapi.com/products`)
    //             .then(res=>res.json())
    //             .then(json=>
    //                 {
    //                     console.log(json)
    //                     setdata(json)
    //                 })
    //     },[]);
//   function search()
//   {
//     const str=prodname.toLowerCase();
//     const product = Product_data.filter((p) => p.title.toLowerCase().includes(str.toLowerCase()) );
//     const product1 =data.filter(((p) => p.title.toLowerCase().includes(str.toLowerCase()) ));
//   }
    return(
        <>
        <header>
            <div className="logo">
                <h1>Exclusive</h1>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary no-color">
             <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active"  to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={'contact'}>Contact</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"to="signup">Sign up</Link>
            </li> 
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control"  onChange={(x)=>setprodname(x.target.value)} type="search" placeholder="What are you looking for ?" aria-label="Search"/>
            <Link  className="btn" to={`search/${prodname}`}> <i className="fa-solid fa-magnifying-glass"></i></Link>
           
           
        </form>
        </div>
    </div>
             </nav>
             <div className="person">
               {flag ? <PersonInfo/>:null}
             </div>
    </header>
        </>
    );
}
export default Navbar;