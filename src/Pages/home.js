import React from 'react'
import {useState,useEffect} from 'react' 
import Navbar from '../Components/navbar'
import Cards from '../Components/cards'

const Home = () => {
  const [Tasks, setTasks] = useState([]);
  const loadtask =async ()=>{
    const response=await fetch('http://localhost:8000/api/task/')
    const res= await response.json();
    //console.log(res.results);
    setTasks(res.results.rows);
    //console.log(Tasks);
  }
  useEffect(()=>{
    loadtask();
  },[])
  return (
    <>
    <Navbar/>
    <h1>Task Display</h1>
    <div style={{border:"2px solid red", display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}>
    {
      Tasks.map((item,index)=>{
        return <Cards key={index} item={item}/>
      })
    }
    </div>
    {/* <Cards/> */}
    
    </>
  )
}

export default Home