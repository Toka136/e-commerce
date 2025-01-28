import React, { useState, useEffect } from "react";
function Timer()
{
    const [time,settime]=useState(3*24*60*60*1000);
    useEffect(()=>
    {
        const interval =setInterval(()=>
        {
            settime((prev)=>
            {
                const newtime=prev-1000;
                if(newtime<0){
                    clearInterval(interval);
                return 0;
                }
                return newtime;
            });
            
        },1000)
        return ()=> clearInterval(interval);
    } ,[])
    const formattime=(time)=>{
        const days = Math.floor(time / (24 * 60 * 60 * 1000));
        const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((time % (60 * 1000)) / 1000);
        return <div className="days-hours">
            <span>{days} </span> <span> {hours}</span>  <span> {minutes}</span> <span> {seconds}</span></div>
    }
return (
    <>
    {time>0 ? <div className="timesales">{formattime(time)}</div>:null}
    </>
)
}
export default Timer;