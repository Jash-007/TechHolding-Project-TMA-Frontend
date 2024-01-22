import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Table = (props) => {
    const [Status, setStatus] = useState();
    const navigate = useNavigate();
    function fn(text, count){
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    const viewbyId=async(item)=>{
    //     const res=await fetch(`http://localhost:8000/api/task/viewbyId/${props.item.tid}`,{
    //       method:"GET",
    //       headers:{
    //         "Content-Type":"application/json"
    //       }
    //     })
    //     const response=await res.json();
    //    console.log(response);
 
            navigate('/SingleTask', {state:{item: item}})
               
        // console.log(response);
       // setStatus(response.tstatus);
    }
    const handleOptions = (e) => {
        setStatus(e.target.value);
    }
    const userTask=async()=>{
        const res=await fetch(`http://localhost:8000/api/dev/${props.item.did}`,{
          method:"GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const response=await res.json();
        if(response){
            navigate('/')
        }
        // console.log(response);
        setStatus(response.tstatus);
    }
    return (
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                </tr>
                <tr >
                    <td>{props.item.tname}</td>
                    <td>{fn(props.item.tdesc,20)}</td>
                    <td > {props.item.tstatus}  
                   
                    </td>
                    <td><a href="#" class="btn" onClick={()=>viewbyId({item: props.item.tid})}> {props.item.did}</a></td>
                </tr>

            </table>
        </>
    )
}
