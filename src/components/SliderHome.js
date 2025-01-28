import Sidebar from "./Sidebar";
import './SliderHome.css'
function SliderHome()
{
    return(
        <>
        <div className="slider-list">
            <Sidebar/>
        <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active ">
        <div className="img-text">
        <img src="iphone14.jpg" className="d-block w-100" alt="..."/>
        <div className="text-photo">
        <div className="logo_name">
        <i class="fa-brands fa-apple"></i>
        <p>iPhone 14 Series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <a href="">
           <span> shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        </div>
        </div>
        </div>
        <div className="carousel-item  ">
        <div className="img-text">
        <img src="iphone14.jpg" className="d-block w-100" alt="..."/>
        <div className="text-photo">
        <div className="logo_name">
        <i class="fa-brands fa-apple"></i>
        <p>iPhone 14 Series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <a href="">
           <span> shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        </div>
        </div>
        </div>
        <div className="carousel-item  ">
        <div className="img-text">
        <img src="iphone14.jpg" className="d-block w-100" alt="..."/>
        <div className="text-photo">
        <div className="logo_name">
        <i class="fa-brands fa-apple"></i>
        <p>iPhone 14 Series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <a href="">
           <span> shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        </div>
        </div>
        </div>
        <div className="carousel-item  ">
        <div className="img-text">
        <img src="iphone14.jpg" className="d-block w-100" alt="..."/>
        <div className="text-photo">
        <div className="logo_name">
        <i class="fa-brands fa-apple"></i>
        <p>iPhone 14 Series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <a href="">
           <span> shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        </div>
        </div>
        </div>
        <div className="carousel-item  ">
        <div className="img-text">
        <img src="iphone14.jpg" className="d-block w-100" alt="..."/>
        <div className="text-photo">
        <div className="logo_name">
        <i class="fa-brands fa-apple"></i>
        <p>iPhone 14 Series</p>
        </div>
        <h1>Up to 10% off Voucher</h1>
        <a href="">
           <span> shop Now</span>
            <i class="fa-solid fa-arrow-right"></i>
        </a>
        </div>
        </div>
        </div>
    </div>

        </div>
        
        </div>
        </>
    )
}
export default SliderHome;