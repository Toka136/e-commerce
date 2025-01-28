import './Aboutnum.css'
function AboutNumbers(props)
{
    return (
        <div className="box">
          <span>  <i className={props.icon}></i></span>
          <span> {props.number}</span>
          <p>{props.text}</p>
        </div>
    )
}
export default AboutNumbers;