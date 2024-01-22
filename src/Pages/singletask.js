import React from 'react'
import { useParams ,useLocation} from "react-router-dom";
import '../Components/css/singletask.css'
export const Singletask = (props) => {
    const location = useLocation();
    const viewbyId=async ()=>{
        const res=await fetch(`http://localhost:8000/api/task/viewbyId/${props.item.tid}`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
          })
          const response=await res.json();
         console.log(response);
    }
    console.log(location.state);
    //location.state.item.tname
  return (
    
    <div class="ag-format-container">
    <div class="ag-courses_box">
      <div class="ag-courses_item">
        <h2 class="ag-courses-item_link">
            {location.state.item.tdesc}
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title">
  {location.state.item.tname}
          </div>
          <div class="ag-courses-item_date-box">
  Start: {location.state.item.tstart}
  <br></br>
            Status:
            <span class="ag-courses-item_date">
              {location.state.item.tstatus}
            </span>
            <br></br>
   End: {location.state.item.tend}
          </div>
        </h2>
      </div>
  
    
  
   
  
  
    
  
    
      
  
    </div>
  </div>
  )
}
