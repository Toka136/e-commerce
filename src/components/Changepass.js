import React, { useState } from 'react';
import UserData2 from '../Userdata';
import Users from '../Usersrecoil';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useRecoilState } from 'recoil';
function Changepass()
{
    const[mail,setmail]=useState();
    const[Pass,setPass]=useState();
    const[Cpass,setCpass]=useState();
    const [users,setusers]=useRecoilState(Users);
    const[alert,setalert]=useState(false);
    const[alert2,setalert2]=useState(false);
    const[alert1,setalert1]=useState(false);
    const navigate1 = useNavigate();
    function changePASS(event)
    {
        event.preventDefault();
        const a=UserData2.find((x)=>x.name===mail);
        if(a)
        {
            let tempusers=UserData2.filter((x)=>x.pass===Pass);
            if(tempusers.length>0)
            {
                setalert1(true);
                setTimeout(() => {
               setalert1(false);
             }, 2000);
            }
            else{
            if(Cpass===Pass){
                const temp={...a,"pass":Pass};
                let allusers=UserData2.filter((x)=>x.id!==a.id);
                allusers.push(temp);
                setusers(allusers);
                navigate1('/login');
            }
            else
            {
                setalert(true)
                setTimeout(() => {
                    setalert(false);
                  }, 3000);
            }
        }
        }
        else
        {
            setalert2(true)
            setTimeout(() => {
                setalert2(false);
              }, 3000);
        }

    }
    return(
        <div className='signup changepass'>
             <h1>Change Password</h1>
            <div className='form'>
        <form onSubmit={changePASS}>
            <div className="mb-3">
                <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(x)=>setmail(x.target.value)} placeholder='Email address'/>
            </div>
            <div className="mb-3">
                
                <input type="password"  id="exampleInputPassword1" onChange={(x)=>setPass(x.target.value)} placeholder=' New Password'/>
            </div>
            <div className="mb-3">
              
                <input type="password"  id="exampleInputPassword2" onChange={(x)=>setCpass((x.target.value))} placeholder=' Confirm Password'/>
                 {alert ? <Alert severity="warning">Confirm Password not equal New Password </Alert>:null}
            </div>
            {alert2 ? <Alert severity="warning">Your Email Is Not In System Please SignUp </Alert>:null}
            {alert1 ? <Alert severity="warning">This Password Is Not Valid . Please Change Your Password </Alert>:null}
            
            <button type="submit" className="btn btn-primary">Change Password</button>
        </form>
        </div>
        </div>
    )
}
export default Changepass;