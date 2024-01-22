import {React,useState,useEffect,createContext} from 'react'
import {useNavigate} from 'react-router-dom'
import '../Components/css/admin.css'
import '../Components/images/school.png'
import { Table } from '../Components/table'
import { Singletask } from './singletask'
import { Devtable } from '../Components/devtable'
export const Admin = () => {
    const [Tasks, setTasks] = useState([]);
    const [Dev,setDev]=useState([]);
    const [Devcount,setDevcount]=useState([]);
    const [Taskcount,setTaskcount]=useState([]);
    const[Admincount,setAdmincount]=useState([]);
    const UserContext = createContext()
    const navigate = useNavigate()
    const loadtask =async ()=>{
      const response=await fetch('http://localhost:8000/api/task/')
      const res= await response.json();
      //console.log(res.results);
      setTasks(res.results.rows);
      //console.log(Tasks);
    }
    const countadmin=async()=>{
        const response=await fetch('http://localhost:8000/api/dev/countadmin')
        const res= await response.json();
        console.log(res.results);
        setAdmincount(res.results.rows[0].count);
        console.log(Admincount);
    }
    const devcount=async()=>{
        const response=await fetch('http://localhost:8000/api/dev/count')
        const res= await response.json();
        console.log(res.results);
        setDevcount(res.results.rows[0].count);
        console.log(Devcount);
    }
    const taskcount=async()=>{
        const response=await fetch('http://localhost:8000/api/task/count')
        const res= await response.json();
        console.log(res.results);
        setTaskcount(res.results.rows[0].count);
        console.log(Taskcount);
    }
    const loaddev =async ()=>{
        const response=await fetch('http://localhost:8000/api/dev/')
        const res= await response.json();
        console.log(res.results);
        setDev(res.results);
        //console.log(dev);
    }
    const viewAll=()=>{
       navigate('/');
        
        //console.log(Tasks);
    }
    const add= ()=>{
        navigate('/addnewtask')
    }
    useEffect(()=>{
      loadtask();
      loaddev();
      devcount();
      taskcount();
      countadmin();
    },[])

  return (
    <>
    <div class="side-menu">
    <div class="brand-name">
        <h1>Brand</h1>
    </div>
    <ul>
        <li><img src='../Components/images/school.png' alt=""/>&nbsp; <span>Dashboard</span> </li>
        <li><img src="reading-book (1).png" alt=""/>&nbsp;<span>Students</span> </li>
        <li><img src="teacher2.png" alt=""/>&nbsp;<span>Teachers</span> </li>
        <li><img src="../Components/images/school.png" alt=""/>&nbsp;<span>Schools</span> </li>
        <li><img src="payment.png" alt=""/>&nbsp;<span>Income</span> </li>
        <li><img src="help-web-button.png" alt=""/>&nbsp; <span>Help</span></li>
        <li><img src="settings.png" alt=""/>&nbsp;<span>Settings</span> </li>
    </ul>
</div>
<div class="container">
    <div class="header">
        <div class="nav">
            <div class="search">
                <input type="text" placeholder="Search.."/>
                <button type="submit"><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" height={10} width={10} alt=""/></button>
            </div>
            <div class="user">
                <a href="#" class="btn" onClick={add}>Add New</a>
               
               
            </div>
        </div>
    </div>
    <div class="content">
        <div class="cards">
            <div class="card">
                <div class="box">
                    <h1>{Devcount}</h1>
                    <h3>Developer</h3>
                </div>
                <div class="icon-case">
                    <img src="https://cdn-icons-png.flaticon.com/512/2572/2572734.png" height={60} width={60} alt=""/>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <h1>{Taskcount}</h1>
                    <h3>Tasks</h3>
                </div>
                <div class="icon-case">
                    <img src="https://png.pngtree.com/png-vector/20190302/ourmid/pngtree-vector-task-icon-png-image_718986.jpg" height={60} width={60} alt=""/>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <h1>{Admincount}</h1>
                    <h3>Admin</h3>
                </div>
                <div class="icon-case">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/636/683/small/admin-3d-illustration-icon-png.png" height={60} width={60} alt=""/>
                </div>
            </div>
          
        </div>
        <div class="content-2">
            <div class="recent-payments">
                <div class="title">
                    <h2>Recent Tasks</h2>
                    <a href="#" class="btn" onClick={viewAll}>View All</a>
                </div>
                {
      Tasks.map((item,index)=>{
        return (
        <>
        <UserContext.Provider item={item}>  
        <Table key={index} item={item}/>
  
    </UserContext.Provider>
       </> )
      })
    }
            </div>
            {/* <div class="new-students">
                <div class="title">
                    <h2>New Students</h2>
                    <a href="#" class="btn">View All</a>
                </div>
               {
                Dev.map((item,index)=>{
                    return (
                    
                    
                    <Devtable key={index} item={item}/>
                   
                    )})
               }
            </div> */}
        </div>
    </div>
</div>
</>
  )
}
