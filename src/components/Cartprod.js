import { useState } from "react";
import { useRecoilState } from 'recoil';
import cart from '../Cart-atom';
import Product_data from "../Data";
import totalprice from "../Totalpric-atom";
function Cartprod(props)
{
    const[count,setcount]=useState(props.count);
    const[Totalprice,settotalprice]=useState(props.product.price*props.count);
    const[cartt,setcart]=useRecoilState(cart);
    const[allpric2,setallprice2]=useRecoilState(totalprice);
    let sum=allpric2;
    function deleteprod()
    {
        const cart2=cartt;
        const x=cart2.filter((f)=>f.id!=props.product.id);
        setcart(x);
        {x.map((prod)=>
            {
                const product= Product_data.find(p => p.id === prod.id);
                return product ? (
                    <Cartprod key={prod.id} product={product} count={prod.quant}/>
                  ) : null;

            })}
            localStorage.setItem("cart", JSON.stringify(x));
    }

    function changequant(x)
    {
        console.log("in");
        const cart=[...(cartt || [])];
         
            const cart2=cart.filter(item=>item.id!==props.product.id);
            const prod={"id": props.product.id,"quant":x};
            cart2.push(prod);
            setcart(cart2);
            localStorage.setItem("cart", JSON.stringify(cart2));
          
    }
    function change(x)
    {
        changequant(x);
        sum-=Totalprice;
        setcount(x);
        settotalprice(x*props.product.price);
        sum+=Totalprice;
        setallprice2(sum);
    }
    return(
        <>
        <tr>
            <td className="cartimg">
                <span>
                <i class="fa-solid fa-xmark" onClick={()=>deleteprod()}></i>
                </span>
                <img src={props.product.image}/></td>
            <td className="cartprice"><p>{props.product.price}</p></td>
            <td><input type="number"  value ={count} onChange={(event)=>
                {
                    if(event.target.value<1)
                        deleteprod();
                    else{
                        change(event.target.value);
                   }
                }
            }/></td>
            <td>{Totalprice}</td>
        </tr>
        </>
    )
}
export default Cartprod;