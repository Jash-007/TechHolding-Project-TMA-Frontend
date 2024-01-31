import React, { useState, useEffect } from 'react'
import { getLoggedInUser, getToken } from '../Utls/auth';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export const User = () => {
    const [User,setUser]=useState([])
   // const [Task,setTask]=useState([])
    const datafetch=async ()=>{
      console.log(getLoggedInUser().did);
        const response=await axios.get(`http://localhost:8000/api/task/user/${getLoggedInUser().did}`, {headers:{token : getToken()}})
        console.log(response.data);
       // res.json(response.data);
        setUser(response.data[0])
    }
   
   
    // const taskfetch=async()=>{
    //     const did=User.did
    //     console.log(did);
    //     const response=await axios.get(`http://localhost:8000/api/task/user/${did}`, {headers:{token : getToken()}})
    //     console.log(response.data);
    //     setTask(response.data[0])
    //    // res.json(response.data);
    // }
   // console.log(Task)
    useEffect(() => {
        datafetch()
       // taskfetch()
    }, [])
    console.log(User);
    const nav=useNavigate();
    const updatedev=async (item)=>{
        console.log(item);
        nav('/updatedev',{state:{item}})
        
      }
      const deldev=async(item)=>{
        const res=await axios.delete(`http://localhost:8000/api/dev/deldev/${item}`,{headers:{token : getToken()}});
        console.log(res.data);
      }
    return (
        <>
         <div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item">
        <h2 class="ag-courses-item_link">
          {User.tname}
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title">
  {User.dname}
          </div>
          <br />
          {User.tdesc}
          <br></br>
          Start: {User.tstart}
          <br></br>
          End: {User.tend}
          <div class="ag-courses-item_date-box">

            Role:
            <span class="ag-courses-item_date">
              {User.drole}
            </span><br />
            Status: 
            <span class="ag-courses-item_date">
              {User.tstatus}
            </span>
            <br></br>
         
   <button onClick={()=>{updatedev(User.did)}}>Update</button>
   <br></br><br></br>
   <div style={{color:'red'}}>
   <button  onClick={()=>{deldev(User.did)}}>Delete</button></div>
   {/* End: {Task.tend} */}
          </div>
        </h2>
      </div>
  
    
  
   
  
  
    
  
    
      
  
    </div>
  </div>
        </>
    )
}
