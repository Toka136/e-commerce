import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product_data from "../Data";
import './Details.css'
import Product from "./Product";
import WishList from "../Wish-atom";
import cart from "../Cart-atom";
import { useRecoilState } from "recoil";
import Alert from '@mui/material/Alert';
import currentU from "../Recoilstates";
import Slider from "react-slick";

function Details()
{
    const [data,setdata]=useState();
    const param=useParams();
    const[product,setproduct]=useState();
    const[quant,setquant]=useState(0);
    const [del,setdel]=useState("yes");
    const [alert, setalert] = useState(false);
    const navigate = useNavigate();
    const [usercart,setusercart]=useRecoilState(cart);
    const [wishlist,setwishlisttoka]=useRecoilState(WishList);
    const [currentuser,setcurrentuser]=useRecoilState(currentU);
    const[products,setproducts]=useState();
    const[cat,setcat]=useState();
    const[flag,setflag]=useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1023, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
            },
          },
        ],
      };
    useEffect(()=>
        {
            // console.log(typeof(param.prodid))
           const prod=Product_data.find((x)=>x.id===parseInt(param.prodid));
           setproduct(prod);
           prod?setcat(prod.category):setcat(null)
           
            // console.log("prod"+prod.title);
        },[param.prodid]);
        useEffect(()=>{
        const Fprod=async()=>
            {
                try{
                    const resp=await fetch(`https://fakestoreapi.com/products/${param.prodid}`);
                    if(resp.ok)
                    {
                        const json = await resp.json();
                        setdata(json);
                       json? setcat(json.category):setcat(null)
                    }
                }catch
                {
                    setdata(null);
                }
            }
            if (param.prodid) {
                Fprod();
              }
            },[param.prodid]);
            useEffect(()=>
            {
                if(data)
                {
                    fetch(`https://fakestoreapi.com/products/category/${cat}`)
                    .then(res=>res.json())
                    .then(json=>{setproducts(json)
                        setflag(true) } )
                }
               
            },[data,param.prodid])
            useEffect(()=>
            {
                if(product)
                {
                    const tempP=Product_data.filter((x)=>x.category===product.category);
                    setproducts(tempP);
                    console.log(tempP);
                }
            },[product,param.prodid])
   
        function minusquant()
        {
            const q=quant-1;
            if(q<0)
            setquant(0);
            else
            setquant(q);
        }
        function plusquant()
        {
            const q=quant+1;
            setquant(q);
        } 
        function addprod()
         {
            
            const cart=[...(usercart || [])];
            let prod;
            prod=product?product:data;
            const a=cart.find((pid) => pid.id === prod.id );
              if (a) {
                const cart2=cart.filter(item=>item.id!==a.id);
                const P={"id": prod.id,"quant":a.quant+1};
                cart2.push(P);
                setusercart(cart2);
                localStorage.setItem("cart", JSON.stringify(cart2));
              } else {
               
                const P={"id": prod.id,"quant":quant>0?quant:1};
               cart.push(P);
               setusercart(cart);
               localStorage.setItem("cart", JSON.stringify(cart));
              
              }
             
              navigate('/cart');
         }
         function addwish()
         {
            if(currentuser!=="No")
                {
                    let prod;
                    prod=product?product:data;
                    const wishlisttemp=[...(wishlist || [])];
                    const a2=wishlisttemp.find((prodid) => prodid.id === prod.id );
                      if (!a2) {
                        // const prod={"id": props.element.id,"quant":0};
                        wishlisttemp.push(prod);
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
    return(
        <>
        {data||product? 
        <div className="details">
            <div className="images">
                {/* {console.log("data"+data)} */}
            <div className="img1">
                <img className={data?"api":""} src= {product?product.image:data.image}/>
            </div>
            <div className="img1">
                <img className={data?"api":""} src= {product?product.image:data.image}/>
            </div>
            <div className="img1">
                <img className={data?"api":""} src={product?product.image:data.image}/>
            </div>
            <div className="img1">
                <img className={data?"api":""} src={product?product.image:data.image}/>
            </div>
            </div>
            <div className="mainimg">
            <div className="img">
                <img className={data?"api":""} src={product?product.image:data.image}/>
            </div>
            </div>
            <div className="detilstext">
            <h1>{product?product.title:data.title}</h1>
            <div className="review">
                {product?<>
                    <i className={product.rating.rate>=1?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={product.rating.rate>=2?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={product.rating.rate>=3?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={product.rating.rate>=4?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <i className={product.rating.rate>=5?"fa-solid fa-star full":"fa-solid fa-star"}></i>
                <span>({product.rate}reviews)</span>
                <span>|</span>
                <p className= {product.rating.count>0?"green-c":"red-c"}> {product.rating.count>0?"in stock":"not available"}  </p>
                </>:
                <>
            <i className={data.rating.rate>=1?"fa-solid fa-star full":"fa-solid fa-star"}></i>
            <i className={data.rating.rate>=2?"fa-solid fa-star full":"fa-solid fa-star"}></i>
            <i className={data.rating.rate>=3?"fa-solid fa-star full":"fa-solid fa-star"}></i>
            <i className={data.rating.rate>=4?"fa-solid fa-star full":"fa-solid fa-star"}></i>
            <i className={data.rating.rate>=5?"fa-solid fa-star full":"fa-solid fa-star"}></i>
            <span>|</span>
            <p className= {data.rating.count>0?"green-c":"red-c"}> {data.rating.count>0?"in stock":"not available"}  </p>
            </>}
               
            </div>
            <p>${product?product.price:data.price}</p>
            <p>{product?product.description:data.description}</p>
            <div className="colours">
                <p>Colours:</p>
                    <input type="radio" name="color" value={"blue"}/>
                    <input type="radio" name="color" value={"red"}/>
            </div>
            <div className="sizes">
                <p>size:</p>
                    <input type="radio" name="size" value={"xs"} placeholder="XS"/>
                    <input type="radio" name="size" value={"s"} placeholder="S"/>
                    <input type="radio" name="size" value={"m"}placeholder="M"/>
                    <input type="radio" name="size" value={"l"} placeholder="L"/>
                    <input type="radio" name="size" value={"xl"} placeholder="XL"/>
            </div>
            <div className="proddet">
                 <div className="buyprod">
                <button onClick={()=>minusquant()}>
                <i class="fa-solid fa-minus"></i>
                </button>
                <span>{quant}</span>
                <button onClick={()=>plusquant()}>
                <i class="fa-solid fa-plus"></i>
                </button>
           
            </div>
            <button className="viewprod" onClick={()=>addprod()}>
                buy Now
            </button>
            <button className="wishbutton" onClick={()=>addwish()}>
            <i class="fa-regular fa-heart"></i>
            </button>
            </div>
            <div className="delv">
                <div>
                <i class="fa-solid fa-van-shuttle"></i>
                <div>
                    <p>Free Delivery</p>
                    <p>Enter your postal code for Delivery Availability</p>
                </div>
                </div>
                <div>
                <i class="fa-solid fa-arrows-rotate"></i>
                <div>
                    <p>Return Delivery</p>
                    <p>Free 30 Days Delivery Returns. Details</p>
                </div>
                </div>
            </div>
            </div>
        </div>:null}
        {data ?<>
       {flag? 
       <div className="SliderP Catslid m-h">
       <Slider {...settings}>
       {products.map((x) => (
          
           <Product key =  {x.id} element={x} />
       
       ))}
    </Slider></div>
       :null}
            </> :null
    }
    {products?
    // console.log(products)
    <div className="SliderP Catslid ">
     <Slider {...settings}>
     {products.map((x) => (
        
         <Product key =  {x.id} element={x} />
     
     ))}
</Slider>
</div>
:null}
        </>
    )
}
export default Details; 