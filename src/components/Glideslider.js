import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Product from './Product';
import Catelement from './Catelement';
import Catwdata from '../Catdata';
// import Timer from './Timer';
import Product_data from'../Data'
import { Link } from 'react-router-dom';
function Glideslider()
{
  const [buttonvalue,setbuttonvalue]= useState(false);
  useEffect(() => {
    // Initialize first Glide instance
    const glide1 = new Glide('.glide1', {
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
    glide1.mount();

    // Initialize second Glide instance
   
    return () => {
      glide1.destroy();
     
    };
  }, []);

  return (
    <div>
      {/* First Glide Carousel */}
      <h3 className='title'>today's</h3>
   <div className='sales'>
     <p>Flash sales</p>
    {/* <Timer/> */}
     </div>
      <div className="glide glide1">
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
            element.discount>0?(
            <li key={element.id} className="glide__slide">
              <Product element={element} />
            </li>):null
          ))}
            {/* Add more slides as needed */}
          </ul>
          <div className="viewprod_cont" ><Link onClick={()=>
            {
              setbuttonvalue(!buttonvalue);
            }
          } className="viewprod" to={`/category/"no"/${!buttonvalue}`} >View all products</Link></div> 
        </div>
      </div>

      {/* Second Glide Carousel */}
    
    </div>
  );

}
export default Glideslider;

