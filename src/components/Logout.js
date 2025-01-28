import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import currentU from "../Recoilstates";
import cart from "../Cart-atom";
import WishList from "../Wish-atom";
import UserData2 from "../Userdata";
import Users from "../Usersrecoil";
function Logout()
{
    const navigate1 = useNavigate();
    const [currentu,setcurrentu]=useRecoilState(currentU);
    const [currentuCart,setcurrentuCart]=useRecoilState(cart);
    const [currentuWish,setcurrentuWish]=useRecoilState(WishList);
    const [users,setusers]=useRecoilState(Users);
    function logout()
    {
    // [...(currentuCart || [])];
        let userdataU= [...(users || [])];
        let cart= currentuCart;
        let wish= [...(currentuWish || [])];
        let Nuser=currentu;
        let allusers=userdataU.filter((x)=>x.id!==Nuser.id);
        // let temp={...Nuser,}
        // console.log("Cart:\n"+cart);
        // console.log("Wish:\n"+wish.length);
        let temp= {"id":Nuser.id,"fname":Nuser.fname,"lname":Nuser.lname,"name":Nuser.name,"pass":Nuser.pass,"token":0,"cart":cart,"wish":wish}
        allusers.push(temp);
        console.log("Temp:\n"+Array(temp.cart));
        setusers(allusers);
        localStorage.clear();
        setcurrentu("No");
        console.log("User:\n"+users);
        navigate1('/');

    }
    return(
        <>
        <p>Now You going to log out . are you sure</p>
        <div className="viewprod_cont formbtn">
        <button className="viewprod " onClick={()=>{ 
            logout();
        }}>log out</button>
             </div>
        
        </>
    )
}
export default Logout;