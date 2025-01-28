import React, { useEffect, useState } from 'react';
import WishList from "../Wish-atom";
import { useRecoilState } from 'recoil';
import currentU from "../Recoilstates";
import Product_data from '../Data';
import { Link } from 'react-router-dom';
import Product from "./Product";
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Bestproducts from './Bestproducts';
function Wishlist()
{
    const [currentu,setcurrentu]=useRecoilState(currentU);
    const[del,setdel]=useState("no");
    const [wishlist,setwishlist]=useRecoilState(WishList);
    // const [data,setdata]=useState();
            const Wlist= [...(wishlist || [])];
            function movetocart()
            {
              
              setdel("yes");
             
            }
            useEffect(() => {
                    // Initialize first Glide instance
                    const glide7 = new Glide('.glide7', {
                      type: 'carousel',
                      startAt: 0,
                      perView: `${Wlist.length>=3 || Wlist.length>=2?3:1}`,
                       gap: 15,
                      breakpoints: {
                        1024: {
                          perView: 2, // Show 2 items for screens <= 1024px
                        },
                        768: {
                          perView: 1, // Show 1 item for screens <= 768px
                        },
                      },
                    });
                    glide7.mount();
                
                    // Initialize second Glide instance
                   
                    return () => {
                      glide7.destroy();
                     
                    };
                  }, [wishlist]);
             
            return(
                <>
                <div className='startofwish'>
                  <p>Wishlist ({wishlist.length})</p>
                  {wishlist.length>0?
                  <button className="viewprod" onClick={()=>movetocart()}>
                  Move All To Bag
             </button>:null}
                </div>
                 <div className="glide glide7">
                 {wishlist.length>0?
                 <>
                 {console.log("Wlist")}
                 <div className="glide__arrows" data-glide-el="controls">
             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
             <i class="fa-solid fa-arrow-left"></i>
             </button>
             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
             <i class="fa-solid fa-arrow-right"></i>
             </button>
           </div></>:null}
            <div className="glide__track" data-glide-el="track"> 
              <ul className="glide__slides">              
               {
      
                wishlist.map((prod)=>
                  {
                    
                 
                    return (
                      <Product key={prod.id} element={prod} wish="yes" del={del} />
                    );
  
                    
                    
  
  
                  })
                }
               
                
              </ul>
            </div>
          </div>        
             <Bestproducts wishlistrow="yes"/>
                </>
            )
        
}
export default Wishlist;