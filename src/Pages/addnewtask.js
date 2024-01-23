import React, { useState } from 'react'
import '../Components/css/addnewtask.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export const Addnewtask = () => {
    const [data,setData]=useState(
        {
            tname:'',
            tdesc:'',
            tstart:'',
            tend:'',
        tstatus:'',
        did:'',
        dname:'1'
        }
    )
    const nav = useNavigate()
    const handlesubmit=async ()=>{
        const response = await axios.post('http://localhost:8000/api/task/add', { tname: data.tname, tdesc: data.tdesc, tstart: data.tstart,tend: data.tend,tstatus: data.tstatus,dname : data.dname,did: data.did });
        console.log(response.data);
        nav('/admin')
    }
    const handleinput=(e)=>{
        const name=e.target.name;
    const value=e.target.value;
    setData({ ...data, [name]: value });
    }
    return (
    <>
    <div class="register">
            <div class="containernewtask">
                <div class="title">New Task</div>
                <div class="content">
                    <form action="#" onSubmit={handlesubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Task Name</span>
                                <input type="text" placeholder="Enter task name" name='tname' id='name' value={data.tname} onChange={handleinput}  required />
                            </div>
                            <div class="input-box">
                                <span class="details">Description</span>
                                <input type="text" placeholder="Enter your Description" name='tdesc' id='desc' value={data.tdesc} onChange={handleinput} required />
                            </div>
                            <div class="input-box">
                                <span class="details">Start Date</span>
                                <input type="date" placeholder="Enter start Date" name='tstart' id='sdate' value={data.tstart} onChange={handleinput}  />
                            </div>
                            <div class="input-box">
                                <span class="details">End Date</span>
                                <input type="date" placeholder="Enter end Date" name='tend' id='edate' value={data.tend} onChange={handleinput}  />
                            </div>
                            <div class="input-box">
                                <span class="details">Status</span>
                                <input type="text" placeholder="Enter task status" name='tstatus' id='status' value={data.tstatus} onChange={handleinput} />
                            </div>
                            <div class="input-box">
                                <span class="details">Assign To</span>
                                <input type="text" placeholder="Enter no to which developer" name='dname' id='dname' value={data.did} onChange={handleinput} required />
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
