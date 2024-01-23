import React, { useEffect } from 'react'
import { useParams ,useLocation} from "react-router-dom";
import '../Components/css/singletask.css'
import {useNavigate} from 'react-router-dom'
import  axios  from 'axios';
export const Singletask = (props) => {
  // console.log(props);
  const nav=useNavigate();
    // console.log(location.state);
   
    const updatetask=async (item)=>{
      console.log(item);
      nav('/updatetask',{state:{item}})
      
    }
    const deltask=async(item)=>{
      const res=await axios.delete(`http://localhost:8000/api/task/deltask/${item}`);
      console.log(res.data);
    }
    // console.log(location.state);
   
      // viewbyId();
    
    
    //location.state.item.tname
  return (
    
    <div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item">
        <h2 class="ag-courses-item_link">
            {props.item.tdesc}
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title">
  {props.item.tname}
          </div>
          <div class="ag-courses-item_date-box">
  Start: {props.item.tstart}
  <br></br>
            Status:
            <span class="ag-courses-item_date">
              {props.item.tstatus}
            </span>
            <br></br>
   End: {props.item.tend}
   <br></br>
   <button onClick={()=>{updatetask(props.item.tid)}}>Update</button>
   <br></br>
   <br></br>
   <div style={{color:'red'}}>
   <button  onClick={()=>{deltask(props.item.tid)}}>Delete</button></div>
          </div>
        </h2>
      </div>
  
    
  
   
  
  
    
  
    
      
  
    </div>
  </div>
  )
}
