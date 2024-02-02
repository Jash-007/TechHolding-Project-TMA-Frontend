import React ,{useState}from 'react'
import './css/card.css'
const Cards = (props) => {
    const [Status,setStatus]=useState();

    const handleOptions = (e) => {
        setStatus(e.target.value);
    }
    const handleupdate=async ()=>{
        const res=fetch('http://localhost:8000/api/task/v1/update/{id}',{id:props.item.tid},{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            tname:props.item.tname,
            tdesc:props.item.tdesc,
            tstatus:Status,
            dname: props.item.dname,
            did:props.item.did,
            tid:props.item.tid
          })
        }
        )
        // const response=await res.json();
    }
  return (
     <>
     <div class="main" style={{justifySelf:"stretch"}}>
 
  <ul class="cards" style={{border:"2px solid red",justifySelf:"stretch", width:"100%"}} >
    <li class="cards_item" style={{ width:"100%",justifySelf:"stretch"}}>
      <div class="card">
        {/* <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div> */}
        <div class="card_content">
          <h2 class="card_title">{props.item.tname}</h2>
          <p class="card_text">{props.item.tdesc}</p>
         <div class="dropdown">
 <label for="status">Status</label>
         <button>{props.item.tstatus}</button>
 
      <select name="status" id="trole" onChange={handleOptions} onClick={handleupdate}>
        <option value="javascript"  >Assigned</option>
        <option value="php">In-progress</option>
        <option value="java">Completed</option>
        
      </select>
  </div>
</div>
        </div>
      
    </li>
   
  

  </ul>
</div>
     </>
  )
}

export default Cards