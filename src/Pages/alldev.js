import React, { useState,useEffect } from 'react'
import { Singledev } from '../Components/singledev';
import Navbar from '../Components/navbar';
import { getToken } from '../Utls/auth';

export const Alldev = () => {
    const [Dev,setDev]=useState([]);
    const loaddev=async ()=>{
        const response=await fetch('http://localhost:8000/api/dev/v1/viewall',{headers:{token : getToken()}})
        const res= await response.json();
        //console.log(res.results);
         setDev(res.results.rows);
        //console.log(Dev);
    }
    useEffect(()=>{
        loaddev();
    },[]);
  return (
    <>
    <Navbar/>
    <h1>Developer Display</h1>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
    {
      Dev.map((item,index)=>{
        return <Singledev key={index} item={item}/>
      })
    }
    </div>
    </>
  )
}
