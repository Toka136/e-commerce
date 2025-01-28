import cart from "../Cart-atom";
import './Check.css'
import Checkoutprod from "./Checkoutprod";
import { useRecoilState } from 'recoil';
import Product_data from '../Data';
import { useEffect, useState } from "react";
function Checkout()
{
    const [Cusercart,setCusercart]=useRecoilState(cart);
    const[allprice,setallprice]=useState(0);
    useEffect(() => {
        const total = Cusercart.reduce((acc, prod) => {
          const product = Product_data.find((p) => p.id === prod.id);
          return product ? acc + product.price * prod.quant : acc;
        }, 0);
        setallprice(total);
      }, [Cusercart, setallprice]);
    return(
    <div className="check">
    <div className="details">
        <h1>Billing Details</h1>
            <form>
        <div className="mb-3">
            <label for="firstname" className="form-label">First Name<span>*</span></label>
            <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label for="CName" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="CName" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="Address" className="form-label">Street Address<span>*</span></label>
            <input type="text" className="form-control" id="Address" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label for="Apartment" className="form-label">Apartment, floor, etc. (optional)</label>
            <input type="text" className="form-control" id="Apartment" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label for="town" className="form-label">Town/City<span>*</span></label>
            <input type="text" className="form-control" id="town" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label for="Phone" className="form-label">Phone Number<span>*</span></label>
            <input type="text" className="form-control" id="Phone" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label for="Email" className="form-label">Email Address <span>*</span></label>
            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" required/>
        </div>
     
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Save this information for faster check-out next time</label>
        </div>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        </form>
    </div>
    <div className="checkoutprods">
    {Cusercart.map((prod) => {
        const product = Product_data.find((p) => p.id === prod.id);
        return product ? (<>
          <Checkoutprod key={prod.id} product={product} cartprod={prod} count={prod.quant} /></>
        ) : null;
      })}
      <div className="subtotal">
        <p>Subtotal:</p>
        <p>${allprice}</p>
      </div>
      <div className="subtotal">
        <p>Shipping:</p>
        <p>free</p>
      </div>
      <div className="total">
        <p>total:</p>
        <p>${allprice}</p>
      </div>
      <div className="pay">
            <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
            <p>Bank</p>
            <img src="/pay.jpg"/>
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label className="form-check-label" for="flexRadioDefault2">
        Cash on delivery
        </label>
        </div>
      </div>
      <div className="cupon">
        <input type="text" placeholder="Coupon Code"/>
        <button className="viewprod">Apply Coupon</button>
      </div>
      <div className="placeorder">
      <button className="viewprod">Place Order</button>
      </div>
      </div>
      </div>
      )
}
export default Checkout;