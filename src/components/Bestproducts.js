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
import'./Bestproducts.css'
function Bestproducts(props)
{
    useEffect(() => {
        // Initialize first Glide instance
        const glide3 = new Glide('.glide3', {
          type: 'carousel',
          startAt: 0,
          perView: 3,
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
        glide3.mount();
    
        // Initialize second Glide instance
       
        return () => {
          glide3.destroy();
         
        };
      }, []);
    
      return (
        <>
        <div>
          {/* First Glide Carousel */}
        {props.wishlistrow!=="yes"?<h3 className='title'>This Month</h3>:""}
       <div className='sales bestsales'>
       {props.wishlistrow!=="yes"? <p>Best Selling Products</p>:<p>Just For You</p>}
         <div className="viewprod_cont"><button className="viewprod">View all </button></div> 
         </div>
          <div className="glide glide3">
          <div className="glide__arrows" data-glide-el="controls">
             <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
             <i className="fa-solid fa-arrow-left"></i>
             </button>
             <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
             <i className="fa-solid fa-arrow-right"></i>
             </button>
           </div>
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {/* Example slides */}
                {Product_data.map((element) => (
                //  console.log(element)
                element.best === "yes" ? (
                    <li className="glide__slide" key={element.id}>
                      <Product element={element} />
                    </li>
                  ):null
              ))}
              
                
              </ul>
            </div>
          </div>        
        </div>
         {props.wishlistrow!=="yes"?
        <div className='Boomdiv'>
         
          <div className='text-icons'>
            <h3>Categories</h3>
            <p>Enhance Your Music Experience</p>
            <div className='spans'>
              <span><span>23</span> <span>hours</span></span>
              <span><span>05</span> <span>days</span></span>
              <span><span>59</span> <span>minutes</span></span>
              <span><span>35</span> <span>seconds</span></span>
            </div>
            <Link>Buy Now</Link>
          </div>
          <div className='Boomimg'>
            <img src='/Boom.png'/>
          </div>
        </div>:null}
        </>

      );
    
}
export default Bestproducts;