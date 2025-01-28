import  currentU from "../Recoilstates";
import { useRecoilState } from 'recoil';
import './Profile.css'
import './Product.css'
import Alert from '@mui/material/Alert';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
function Profile()
{
    const [cUser,setcUser]=useRecoilState(currentU);
    const[firstname,setfirstname]=useState(cUser.fname);
    const[lasttname,setlasttname]=useState(cUser.lname);
    const[Cpass,setCpass]=useState("Current Password");
    const[Npass,setNpass]=useState("New Password");
    const[CNpass,setCNpass]=useState("Confirm New Password");
    const[alert,setalert]=useState(false);
    const[alert2,setalert2]=useState(false);
    const[cancel,setcancel]=useState(false);
    const fname=cUser.fname;
    const lname=cUser.lname;
    const email=cUser.name;
    let userr={...cUser};
    function savechange(event)
    {
        event.preventDefault();
        if(cancel)
        {
            console.log("ccc");
            setfirstname(cUser.fname);
            setlasttname(cUser.lname);
            setNpass("New Password")
            setCNpass("Current Password")
            setCpass("Confirm New Password")
        }
        else{
        userr.fname=firstname;
        userr.lname=lasttname;
        if(userr.pass===Cpass)
        {
            if(Npass==CNpass)
            {
                userr.pass=Npass;
                setcUser(userr);
            }
            else
            {
                setalert(true);
                setTimeout(() => {
                    setalert(false);
                  }, 2000);
            }
        }
        else{
            setalert2(true);
            setTimeout(() => {
                setalert2(false);
              }, 2000);
        }
    }

    }
    return(
        <>
        <div className="header">
            <p className="start"><a href="">Home</a>/<a href="">my account</a></p>
            <p>Welcome! {fname} {lname}</p>
        </div>
        <div className="main-info">
            <div className="Plinks">
                <ul>
                    <li>Manage My Account
                        <ul>
                       <li>
                        <Link to={'/profile'} className="active">My Profile</Link> </li>
                       <li> Address Book</li>
                       <li> My Payment Options</li>
                        </ul>
                    </li>
                    <li>
                    My Orders
                    <ul>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                    </li>
                    <li>
                    <Link to={'/'}>My WishList</Link>
                    </li>
                </ul>
            </div>
            <div className="profileinfo">
            <form class="row g-3" onSubmit={savechange}>
    <div class="col-md-6">
        <label for="inputEmail4" class="form-label">First name</label>
        <input type="text" class="form-control" id="inputEmail4" placeholder={fname} onChange={(x)=>setfirstname(x.target.value)}/>
    </div>
    <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Last name</label>
        <input type="text" class="form-control" id="inputPassword4" placeholder={lname} onChange={(x)=>setlasttname(x.target.value)}/>
    </div>
    <div class="col-md-6">
        <label for="Email4" class="form-label">email</label>
        <input type="email" class="form-control" id="Email4" readOnly  placeholder={email}  />
    </div>
    <div class="col-md-6">
        <label for="address" class="form-label">address</label>
        <input type="text" class="form-control" id="address"/>
    </div>
    <div class="col-12">
        <label for="password" class="form-label">Password Changes</label>
        <input type="password" class="form-control" id="password" placeholder={Cpass} onChange={(x)=>setCpass(x.target.value)}/>
    </div>
    <div class="col-12">
        
        <input type="password" class="form-control" id="newpassword" placeholder={Npass} onChange={(x)=>setNpass(x.target.value)}/>
    </div>
    <div class="col-12">
        
        <input type="password" class="form-control" id="conf_newpassword" placeholder={CNpass}onChange={(x)=>setCNpass(x.target.value)}/>
    </div>
    {alert ? <Alert severity="warning">Confirm Password Not equal New Password</Alert>:null}
    {alert2 ? <Alert severity="warning">Current Password Is Not Correct</Alert>:null}
    
    <div class="col-12 subcan">
        <Link className="cancel" to='/'>cancel</Link>
        <button type="submit" class=" viewprod"onClick={()=>setcancel(false)} >Save Changes</button>
     </div>
</form>
            </div>
        </div>
        </>
    )
}
export default Profile;