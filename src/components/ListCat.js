import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Product from './Product';
import Catelement from './Catelement';
import Timer from './Timer';
import Product_data from'../Data'
import Catwdata from '../Catdata';
const ListCat = (props) => {
  useEffect(() => {
    // Initialize first Glide instance
    

    // Initialize second Glide instance
    const glide2 = new Glide('.glide2', {
      type: 'carousel',
      startAt: 0,
      perView: 5,
      gap: 20,
      breakpoints: {
        1024: {
          perView: 3, // Show 2 items for screens <= 1024px
        },
        768: {
          perView: 2, // Show 1 item for screens <= 768px
        },
      },
    });
    glide2.mount();

    return () => {
     
      glide2.destroy();
    };
  }, []);

  return (
    <>
   <h3 className='title'>Categories</h3>
   <div className='sales'>
     <p>Browse By Category</p>
     </div>
      <div className="glide glide2">
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
             {/* Example slides */}
             {Catwdata.map((element) => (
            //  console.log(element)
            <li key={element.id} className="glide__slide">
              <Catelement element={element} />
            </li>
          ))}
            {/* Add more slides as needed */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListCat;
