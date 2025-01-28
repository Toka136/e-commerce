import { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import Alert from '@mui/material/Alert';
import Users from '../Usersrecoil';
function SignUp()
{
    const[Name,setName]=useState();
    const[Email,setEmail]=useState();
    const[Pass,setPass]=useState();
    const[alert,setalert]=useState(false);
    const[users,setusers]=useRecoilState(Users);
    const navigate = useNavigate();
    function signupuser(event)
    {
        event.preventDefault();
        let tempusers=users.filter((x)=>x.pass===Pass);
        if(tempusers.length>0)
        {
            setalert(true);
            setTimeout(() => {
           setalert(false);
         }, 2000);
        }
        else
        {
            let allname=Name.split(" ");
            let allusers=[...(users || [])];
            console.log("id:"+allusers.length+1+"fname:"+allname[0]+"lname"+allname[1]+"name"+Email,"pass"+Pass)
            let temp= {"id":allusers.length+1,"fname":allname[0],"lname":allname[1],"name":Email,"pass":Pass,"token":0,"cart":[],"wish":[]};
            allusers.push(temp);
            setusers(allusers);
            navigate('/login');
        }

    }
    return(
        <div className="signup">
            <div className="img">
                <img src="sign.jpg"></img>
            </div>
            <div className="form">
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <form  onSubmit={signupuser}>
                    <input type="text" placeholder="Name" onChange={(x)=>setName(x.target.value)}></input>
                    <input type="text" placeholder="Email or Phone Number" onChange={(x)=>setEmail(x.target.value)}></input>
                    <input type="password" placeholder="password" onChange={(x)=>setPass(x.target.value)}></input>
                    {alert ? <Alert severity="warning">This Password Is Not Valid . Please Change Your Password </Alert>:null}
                    <button type="submit">Create Account</button>
                </form>
                <button>
                    <img src="google.jpg"/><p>Sign up with Googl</p>
                </button>
                <p >Already have account? <Link to="login">Log in</Link></p>
            </div>
        </div>
    )
}
export default SignUp;