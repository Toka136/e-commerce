import './Footer.css'
function Footer()
{
    return(
        <div className="footercont">
            <div className="divs">
            <div className="div1">
                <h1>Exclusive</h1>
                <h3>Subscribe</h3>
                <p>Get 10% off your first order</p>
                <div className="email1">
                    <input type="email" placeholder="Enter Your email"/>
                   <span> <i class="fa-brands fa-telegram"></i></span>
                </div>
            </div>
            <div className="div1">
                <h1>Support</h1>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className="div1">
            <h1>Account</h1>
            <a href=''>Login / Register</a>
            <a href=''>Cart</a>
            <a href=''>Wishlist</a>
            <a href=''>Shop</a>
            </div>
            <div className="div1">
                <h1>Privacy Policy</h1>
                <a href=''>Terms Of Use</a>
                 <a href=''>FAQ</a>
                 <a href=''>Contact</a>
            </div>
            <div className="div1">
                <h1>Download App</h1>
                <p>Save $3 with App New User Only</p>
                <img src='/download.jpg'></img>
                <div className="links">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
            </div>
            <div className='copy'><p> &copy; Copyright Rimel 2022. All right reserved</p></div>
        </div>
    )
}
export default Footer;