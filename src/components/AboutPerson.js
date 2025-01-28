
function AboutPerson(props)
{
  

    return (
        <>
        {props.p?
        <div className="PER">
        <div className="APimg">
        <img src={props.p.img}/>
        </div>
        <div className="APtext">
            <p>{props.p.name}</p>
            <p>{props.p.job}</p>
            <div className="APicons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
        </div>:null}
        </>
    )
}
export default AboutPerson;