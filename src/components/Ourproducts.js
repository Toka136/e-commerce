import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Product from './Product';
import Catelement from './Catelement';
import Catwdata from '../Catdata';
// import Timer from './Timer';
import Product_data from'../Data'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Newarriveprod from './Newarriveprod';
function Ourproducts()
{
    const [buttonvalue,setbuttonvalue]= useState(false);
    useEffect(() => {
        // Initialize first Glide instance
        const glide4 = new Glide('.glide4', {
          type: 'carousel',
          startAt: 0,
          perView: 4,
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
        glide4.mount();
    
        // Initialize second Glide instance
       
        return () => {
          glide4.destroy();
         
        };
      }, []);
      return (
        <>
        <div>
          {/* First Glide Carousel */}
          <h3 className='title'>Our Products</h3>
       <div className='sales bestsales'>
         <p>Explore Our Products</p>
         </div>
          <div className="glide glide4">
          <div className="glide__arrows" data-glide-el="controls">
             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
             <i class="fa-solid fa-arrow-left"></i>
             </button>
             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
             <i class="fa-solid fa-arrow-right"></i>
             </button>
           </div>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {/* Example slides */}
                {Product_data.map((element) => (
                //  console.log(element)
                // parseInt(element.id) % 2 === 0? (
                    <li className="glide__slide" key={element.id}>
                      <Product element={element} />
                    </li>
                 
              ))}
              </ul>
              <div className="viewprod_cont" ><Link onClick={()=>
            {
              setbuttonvalue(!buttonvalue);
            }
          } className="viewprod" to={`/category/"no"/${!buttonvalue}`} >View all products</Link></div> 
            </div>
          </div>
        
        </div>
          <div className='newarrive'>
            <Newarriveprod img="playstation5.png" title="PlayStation 5" desc="Black and White version of the PS5 coming out on sale."/>
            <div className='rightarrive'>
            <Newarriveprod img="women.jpeg" title="Women’s Collections" desc="Featured woman collections that give you another vibe."/>
            <div className='rightarrivedown'>
            <Newarriveprod img="speaker.png"title="Speakers" desc="Amazon wireless speakers"/>
            <Newarriveprod img="perfum.png" title="Perfume" desc="GUCCI INTENSE OUD EDP"/>
            </div>
            </div>
          </div>
          <div className="serv">
            <div className="serv1">
            <i class="fa-solid fa-truck"></i>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
            </div>
            <div className="serv1">
            <i class="fa-solid fa-headphones-simple"></i>    
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
            </div>
            <div className="serv1">
            <i class="fa-solid fa-square-check"></i>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
            </div>
        </div>
        </>

      );
    
}
export default Ourproducts;