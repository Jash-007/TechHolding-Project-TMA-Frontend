import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { getToken } from '../Utls/auth';

export const Singledev = (props) => {
    const nav=useNavigate();
    const updatedev=async (item)=>{
        console.log(item);
        nav('/updatedev',{state:{item}})
        
      }
      const deldev=async(item)=>{
        const res=await axios.delete(`http://localhost:8000/api/dev/v1/deleteDev/${item}`,{headers:{token : getToken()}});
        console.log(res.data);
      }
  return (
    <div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item">
        <h2 class="ag-courses-item_link">
            {props.item.demail}
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title">
  {props.item.dname}
          </div>
          <div class="ag-courses-item_date-box">

            Role:
            <span class="ag-courses-item_date">
              {props.item.drole}
            </span>
            <br></br>
         
   <button onClick={()=>{updatedev(props.item.did)}}>Update</button>
   <br></br><br></br>
   <div style={{color:'red'}}>
   <button  onClick={()=>{deldev(props.item.did)}}>Delete</button></div>
          </div>
        </h2>
      </div>
    </div>
  </div>
  )
}
