import { useEffect, useState } from "react";

function Checkoutprod(props)
{
    const[Totalprice,settotalprice]=useState(props.product.price*props.count);
   
    return( 
     <>
    <tr className="checkprod">
    <td className="cartimg">
        <img src={props.product.img}/></td>
    <td className="cartprice"><p>{props.product.name}</p></td>
    <td className="cartprice"><p>{props.count}</p></td>
    <td>${Totalprice}</td>
   </tr></>)
      
}
export default Checkoutprod;