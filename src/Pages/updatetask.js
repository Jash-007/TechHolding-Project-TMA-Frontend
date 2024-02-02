import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'


export const Updatetask = (props) => {
    const [data, setData] = useState(
        {
            tname: '',
            tdesc: '',
            tstart: '',
            tend: '',
            tstatus: '',
            did: '',
            dname: '1'
        }
    )
    const loc = useLocation();
    // console.log(loc.state.item);
    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }
    const nav = useNavigate();

    const item = loc.state ? loc.state.item : null;
    const handlesubmit = async (e) => {
        e.preventDefault()
        const tid = item;
        console.log(tid);
        try {
            console.log(data)
            const response = await axios.put(`http://localhost:8000/api/task/v1/updateTask/${tid}`, { tname: data.tname, tdesc: data.tdesc, tstart: data.tstart, tend: data.tend, tstatus: data.tstatus, dname: data.dname, did: data.did });
            console.log(response.data);
            nav('/admin')
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div class="register">
                <div class="containernewtask">
                    <div class="title">Update</div>
                    <div class="content">
                        <form>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Task Name</span>
                                    <input type="text" placeholder="Enter task name" name='tname' id='name' value={props.tname} onChange={handleinput} required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Description</span>
                                    <input type="text" placeholder="Enter your Description" name='tdesc' id='desc' value={props.tdesc} onChange={handleinput} required />
                                </div>
                                <div class="input-box">
                                    <span class="details">Start Date</span>
                                    <input type="date" placeholder="Enter start Date" name='tstart' id='sdate' value={props.tstart} onChange={handleinput} />
                                </div>
                                <div class="input-box">
                                    <span class="details">End Date</span>
                                    <input type="date" placeholder="Enter end Date" name='tend' id='edate' value={props.tend} onChange={handleinput} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Status</span>
                                    <input type="text" placeholder="Enter task status" name='tstatus' id='status' value={props.tstatus} onChange={handleinput} />
                                </div>
                                <div class="input-box">
                                    <span class="details">Assign To</span>
                                    <input type="number" placeholder="Enter no to which developer" name='did' id='dname' value={props.did} onChange={handleinput} />
                                </div>
                            </div>
            
                            <button class="button" type="submit" onClick={(e) => handlesubmit(e)}>Submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
