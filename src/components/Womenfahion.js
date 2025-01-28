import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import Product from "./Product";
import { useParams } from "react-router-dom";
import Product_data from "../Data";
function Womenfashion(props)
{
  const param=useParams();
    const [data,setdata]=useState([]);
    const [products,setproducts]=useState([]);
    const [allproducts,setproallducts]=useState();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1023, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 2, 
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
        fetch(`https://fakestoreapi.com/products/category/${param.categoryname}`)
            .then(res=>res.json())
            .then(json=>
                {
                    console.log(json)
                    setdata(json)
                    // data.concat(json);
                })
    },[param.categoryname]);
    useEffect(()=>
      {
          const tempP=Product_data.filter((x)=>x.category===param.categoryname);
          setproducts(tempP);
      },[param.categoryname]);
      useEffect(()=>
      {
        const combine=[...products,...data];
        setproallducts(combine);
      },[data,products])
    return(
      <>
        <div className="SliderP Catslid">
            {allproducts ?
             allproducts.length>1?
                    <div className="SliderP Catslid ">
                        {/* {console.log(products)} */}
                    <Slider {...settings}>
                    {allproducts.map((x) => (
                       
                        <Product key =  {x.id} element={x} />
                    
                    ))}
               </Slider>
               </div>:
               <div className="Sprod">
                <Product key =  {products[0].id} element={products[0]} /></div>
                :null}
        
            </div>
            {/* {products?
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
                </div>:null} */}
     </>
    )

}
export default Womenfashion;
