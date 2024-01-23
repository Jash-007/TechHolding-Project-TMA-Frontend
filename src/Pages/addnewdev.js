import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import  axios  from 'axios'
import '../Components/css/addnewtask.css'
import { getToken } from '../Utls/auth'
export const Addnewdev = () => {
    const [data,setData]=useState(
        { 
            demail:'',
            dname:'',
            dpass:'',
            drole:''
        }
    ) 
    const navigate=useNavigate();
    const handleinput=(e)=>{
        const name=e.target.name;
    const value=e.target.value;
    setData({ ...data, [name]: value });
    }
    const handlesubmit=async()=>{
        const response = await axios.post('http://localhost:8000/api/dev/add', { demail:data.demail, dname: data.dname, dpass:data.dpass,drole:data.drole },{headers:{token : getToken()}});
        console.log(response.data);
        navigate('/admin');
    }
  return (
    <>
        <div class="register">
            <div class="containernewtask">
                <div class="title">New Developer</div>
                <div class="content">
                    <form action="#" onSubmit={handlesubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Task Name</span>
                                <input type="text" placeholder="Enter task name" name='dname' id='name' value={data.dname} onChange={handleinput}  required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your Email" name='demail' id='demail' value={data.demail} onChange={handleinput} required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter password" name='dpass' id='dpass' value={data.dpass} onChange={handleinput} required />
                            </div>
                           
                            <div class="input-box">
                                <span class="details">Status</span>
                                <input type="text" placeholder="Enter task status" name='drole' id='role' value={data.drole} onChange={handleinput} required />
                            </div>
                           
                        </div>
                       <button class="button" type='submit'>Submit </button>
                            </form>
                </div>
                </div>
                </div>
    </>
  )
}
