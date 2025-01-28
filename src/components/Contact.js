import './Contact.css'
function Contact()
{
    return(
        <>
        <div className="linksnotfound">
           <span >Home</span> / <span>Contact</span>
        </div>
        <div className="cont-cont">
            <div className="text-cont">
                <div className="text1">
                    <div className="text-title">
                    <i class="fa-solid fa-phone"></i>
                    <h3>Call To Us</h3>
                    </div>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +8801611112222</p>
                </div>
                <div className="text2">
                    <div className="text-title">
                    <i class="fa-solid fa-envelope"></i>
                    <h3>Write To Us</h3>
                    </div>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails: customer@exclusive.com</p>
                    <p>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className="cont-form">
                <form>
                    <div className="info">
                        <input type="text"  placeholder="Your Name" className="form-control is-valid"/>
                        <input type="email"  placeholder="Your Email" className="form-control is-valid"/>
                        <input type="text"  placeholder="Your Phone" className="form-control is-valid"/>
                    </div>
                    <textarea placeholder="Your Message"></textarea>
                    <div className="viewprod_cont formbtn">
                    <button type="submit" className="viewprod ">send message</button>
             </div>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;