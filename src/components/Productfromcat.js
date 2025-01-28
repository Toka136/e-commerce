
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Product from './Product';
import Product_data from'../Data'
import { useParams } from 'react-router-dom';
function Productfromcat(props)
{
  const param=useParams();
    useEffect(() => {
       const filteredProducts = Product_data.filter(
      (element) => element.category.toLocaleLowerCase() === `${param.categoryname.toLocaleLowerCase()}`
    );
    
       console.log(filteredProducts.length)
        const glide1 = new Glide('.glide1', {
          type: 'carousel',
          startAt: 0,
          perView: `${filteredProducts.length  >=3 || param.btnvalue==="true"?3:2}`,
          gap: 15,
          //bound: true, // Prevent Glide from creating additional slides for single items
         // loop: filteredProducts > 1 ,
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
          <h3 className='title'>{param.btnvalue=="true" ?"All Products" : param.categoryname } </h3>
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
                
                {Product_data.map((element) => (
               element.category === `${param.categoryname}` || param.btnvalue==="true" ? (
                <li className="glide__slide">
                  <Product element={element} />
                </li>
              ):null
              ))}
              </ul>
            </div>
          </div>
    
        
        </div>
      );
    
}
export default Productfromcat;