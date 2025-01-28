import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product_data from "../Data";
import Product from "./Product";
import Slider from "react-slick";

function Searchprod()
{
    const param=useParams();
    const[ data,setdata]=useState();
    const[products,setproducts]=useState();
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1023, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
            },
          },
        ],
      };
    useEffect(()=>
        {
            fetch(`https://fakestoreapi.com/products`)
                .then(res=>res.json())
                .then(json=>
                    {
                      
                        setdata(json);
                        const tempP=json.filter((x)=>x.title.toLocaleLowerCase().includes(param.word.toLocaleLowerCase()));
                        setdata(tempP);
                    })
        },[param.word]);
        useEffect(()=>
            {
                const tempP=Product_data.filter((x)=>x.title.toLocaleLowerCase().includes(param.word.toLocaleLowerCase()));
                setproducts(tempP);
            },[param.word]);

            return(
                <>
                {data?
                    <div className="SliderP Catslid ">
                    <Slider {...settings}>
                    {data.map((x) => (
                       
                        <Product key =  {x.id} element={x} />
                    
                    ))}
               </Slider>
               </div>:null}
                {products?
                products.length>1?
                    <div className="SliderP Catslid ">
                        {console.log(products)}
                    <Slider {...settings}>
                    {products.map((x) => (
                       
                        <Product key =  {x.id} element={x} />
                    
                    ))}
               </Slider>
               </div>:
               <div className="Sprod">
                <Product key =  {products[0].id} element={products[0]} />
                </div>
               :null}

                </>
            )
}
export default Searchprod;
