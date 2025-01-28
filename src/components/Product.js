import './Product.css'
import { useRecoilState, useRecoilValue } from 'recoil';
import currentU from "../Recoilstates";
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import cart from '../Cart-atom';
import WishList from '../Wish-atom';
import { Link, useNavigate } from 'react-router-dom';
import Details from './Details';
function Product(props)
{
    const [currentuser,setcurrentuser]=useRecoilState(currentU);
    const [usercart,setusercart]=useRecoilState(cart);
    const [wishlist,setwishlisttoka]=useRecoilState(WishList);
    const navigate = useNavigate();
    const [alert, setalert] = useState(false);
    function addtocart()
    {
        if(currentuser!=="No")
        {
           
            const cart=[...(usercart || [])];
            const a=cart.find((prodid) => prodid.id === props.element.id );
              if (a) {
                // console.log("findddd\n");
                const cart2=cart.filter(item=>item.id!==a.id);
                const prod={"id": props.element.id,"quant":props.del==="yes"?1:a.quant+1};
                cart2.push(prod);
                setusercart(cart2);
                localStorage.setItem("cart", JSON.stringify(cart2));
              } else {
                const q=0;
            
                const prod={"id": props.element.id,"quant":1};
               cart.push(prod);
               setusercart(cart);
               localStorage.setItem("cart", JSON.stringify(cart));
               if(props.wish === "yes")
               {
                deletefromlist();
               }
              }

              
              //console.log("usercart"+usercart);
             
        }
        else
        {
            setalert(true);
             setTimeout(() => {
            setalert(false);
          }, 2000);
           
        }
        
    }
    function addtowishlist()
    {
        if(currentuser!=="No")
            {
               
                const wishlisttemp=[...(wishlist || [])];
                const a2=wishlisttemp.find((prodid) => prodid.id === props.element.id );
                  if (!a2) {
                    // const prod={"id": props.element.id,"quant":0};
                    wishlisttemp.push(props.element);
                   setwishlisttoka(wishlisttemp);
                   
                  }
                    localStorage.setItem("wish", JSON.stringify(wishlisttemp));
                  
                  //console.log("usercart"+usercart);
                 
            }
            else
            {
                setalert(true);
                 setTimeout(() => {
                setalert(false);
              }, 2000);
               
            }
            
        }
        function deletefromlist()
        {
          let Wtemp=[...(wishlist || [])];
          let tempW=Wtemp.filter((x)=>x.id!==props.element.id);
          setwishlisttoka(tempW);
          localStorage.setItem("wish", JSON.stringify(tempW));
          // navigate('/wish');
        }
    function detalispage()
    {
      console.log("otokto4");
    navigate(`/detailspage/${props.element.id}`)
    }
    return (
        <>
      {props.del === "yes" ? (
      <>
        {deletefromlist()}
         {addtocart()}
      </>
    ) :
        <div className="product_cont">
            <div className="img-textt">
            <img src={props.element.image}/>
            <span className={props.element.new ==="yes"?'newspan':""} >
            {props.element.discount > 0 ? `-${props.element.discount}%` : null}
            {props.element.new ==="yes" ? `new` : null}
            </span>
            {props.wish === "yes" ? ( <i className="fa-regular fa-trash-can" onClick={()=>deletefromlist()}></i>) : (
                <>
                    <i className="fa-regular fa-heart" onClick={()=>addtowishlist()}></i>
                      <a onClick={detalispage}><i className="fa-regular fa-eye" ></i></a>
                    
                </>
            )}

            
            {alert ? <Alert severity="warning">Please Log in First.</Alert>:null}
            <div className="add_cart" onClick={()=>addtocart()}>
         
                <p >Add to cart</p>
            </div>
            </div>
            <div className="desc">
                <p>{props.element.title}</p>
                <div className="price">
                <p> ${props.element.price}</p>
                <p>{props.element.price_discount>0 ? `$${props.element.price_discount}`:null}</p>
                </div>
                <div className="review">
                <i className={props.element.rating.rate>=1?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={props.element.rating.rate>=2?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={props.element.rating.rate>=3?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={props.element.rating.rate>=4?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={props.element.rating.rate>=5?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <span>{props.element.rate?`(${props.element.rate})`:null}</span>
                </div>
            </div>
        </div>
}
        </>
    )
}
export default Product;