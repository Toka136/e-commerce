import { useRecoilState } from 'recoil';
import currentU from "../Recoilstates";
import { useEffect, useState } from 'react';
import Cartprod from './Cartprod';
import Product_data from '../Data';
import cart from '../Cart-atom';
import totalprice from '../Totalpric-atom';
import './Cart.css'
import { Link } from 'react-router-dom';
function Cart()
{
    const [currentu,setcurrentu]=useRecoilState(currentU);
    const [Cusercart,setCusercart]=useRecoilState(cart);
    const[allpric,setallprice]=useRecoilState(totalprice);
        const [data,setdata]=useState();
    let allpric3=allpric;
    let sum=0;
       useEffect(()=>
        {
            fetch(`https://fakestoreapi.com/products`)
                .then(res=>res.json())
                .then(json=>
                    {
                        // console.log(json)
                        setdata(json)
                    })
        },[]);
    useEffect(() => {
      const total = Cusercart.reduce((acc, prod) => {
        const product = Product_data.find((p) => p.id === prod.id);
        return product ? acc + product.price * prod.quant : acc;
      }, 0);
      setallprice(total);
    }, [Cusercart]);
     
            const usercart=Cusercart;
           
            return(
              data?
            <>
            <div className='cartprod'>
              <p className="start"><a href="">Home</a>/<a href="">About</a></p>
              <table className="carttable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {data?
          usercart.map((prod) => {
            const product = Product_data.find((p) => p.id === prod.id);
            const product1 =data.find((p) => p.id === prod.id);
            if(product)
              return (
                <Cartprod key={prod.id} product={product}  cartprod={prod} count={prod.quant} />
              );
              else if(product1)
                return (
                  <Cartprod key={prod.id} product={product1}  cartprod={prod} count={prod.quant} />
                );
          }):null}
        </tbody>
      </table>

              </div>
              <div className='cartlinks'>
                <Link to={'/'}>return to shop</Link>
                <Link to={'/'}>update cart</Link>
              </div>
              <div className='cartpay'>
                <div className='coupon'>
                  <input type='text' placeholder='Coupon Code'/>
                  <button type='submit' className='viewprod p-5'>Apply Coupon</button>
                </div>
                <div className='total'>
                  <h4>cart total</h4>
                  <div className='totalprice'>
                    <span>Subtotal:</span>
                    <span>${allpric3}</span>
                  </div>
                  <div className='totalprice'>
                    <span>Shipping:</span>
                    <span>free</span>
                  </div>
                  <div className='totalprice'>
                    <span>Total:</span>
                    <span>${allpric3}</span>
                  </div>
                  <div className='linkshow'>
                  <Link to={''} className='viewprod d-b'>Procees to checkout</Link>
                  </div>
                </div>
              </div>
            </>:"null"
            )
        
  
}
export default Cart;