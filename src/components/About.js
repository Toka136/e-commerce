import AboutNumbers from "./AboutNumbers"
import './About.css'
import AboutPerson from "./AboutPerson";
import React from "react";
import Slider from "react-slick";
function About()
{
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
      const person=[
        {"name":"Tom Cruise","img":"./tom.png","job":"Founder & Chairman"},
        {"name":"Emma Watson","img":"./Emma.png","job":"Managing Director"},
        {"name":"Will Smith","img":"./willpng.png","job":"Product Designer"}
      ]
    return(
        <>
        <p className="start"><a href="">Home</a>/<a href="">About</a></p>
        <div className="story">
        <div className="text">
            <h1>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="img">
            <img src="Aboutimg.jpg"/>
        </div>
        </div>
        <div className="numbers">
        <AboutNumbers icon="fa-solid fa-store" number="10.5 K" text="Sallers active our site"/>
        <AboutNumbers icon="fa-solid fa-dollar-sign" number="33 K" text="Mopnthly Produduct Sale"/>
        <AboutNumbers icon="fa-solid fa-bag-shopping" number="45.5 K" text="Customer active in our site"/>
        <AboutNumbers icon="fa-solid fa-money-bill" number="25 K" text="Anual gross sale in our site"/>
        </div>
        <div className="SliderP">
            <Slider {...settings}>
    {person.map((x) => (
        <AboutPerson p={x} f="1" />
    ))}
</Slider>

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
    )
}
export default About;