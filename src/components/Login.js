import { Link } from "react-router-dom";
import React, { useState } from 'react';
import UserData2 from "../Userdata";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import currentU from "../Recoilstates";
import Users from "../Usersrecoil";
import Alert from '@mui/material/Alert';
function Login()
{
    const[mail,setmail]=useState('');
    const[pass,setpass]=useState('');
    const[count,setcount]=useState(0);
    const [currentuser,setcurrentuser]=useRecoilState(currentU);
    const [users,setusers]=useRecoilState(Users);
    const[alert,setalert]=useState(false);
    const navigate = useNavigate();
    function checkuser(event)
    {
        event.preventDefault();
        console.log(users);
        let user = users.find(user => user.name === mail && user.pass === pass);
        if(user)
        {
            // console.log("find");
           user= { ...user, token: 1 };
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("cart", JSON.stringify(user.cart));
            localStorage.setItem("wish", JSON.stringify(user.wish));
            setcurrentuser(user);
            navigate('/');
        }
        else 
        {
            setalert(true);
            setcount(count+1);
            if(count===2)
                navigate('/signup');
            setTimeout(() => {
                setalert(false);
              }, 2000);
        }
        // user.token = 0;

    }
    function changepass()
    {
        
    }
    return(
        <div className="signup">
        <div className="img">
            <img src="/sign.jpg"></img>
        </div>
        <div className="form">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <form onSubmit={checkuser}>
                <input type="text" placeholder="Email or Phone Number" onChange={(x)=>setmail(x.target.value)}></input>
                <input type="password" placeholder="password"  onChange={(x)=>setpass(x.target.value)}></input>
                {alert ? <Alert severity="warning">Password Is Wrong . Please Try again </Alert>:null}
                
                <div className="log">
                <button type="submit" >Log in</button>
                <Link to={'/forgetpass'}>Forget Password?</Link>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Login;