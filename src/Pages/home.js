import React from 'react'
import {useState,useEffect} from 'react' 
import Navbar from '../Components/navbar'
import Cards from '../Components/cards'
import { Singletask } from '../Components/singletask'

const Home = () => {
  const [Tasks, setTasks] = useState([]);
  const loadtask =async ()=>{
    const response=await fetch('http://localhost:8000/api/task/v1/view')
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
    <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)"}}>
    {
      Tasks.map((item,index)=>{
        return <Singletask key={index} item={item}/>
      })
    }
    </div>
    {/* <Cards/> */}
    
    </>
  )
}

export default Home