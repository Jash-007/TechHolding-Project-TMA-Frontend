import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'


export const Updatedev = (props) => {
    const [data, setData] = useState(
        { 
            demail:'',
            dname:'',
            dpass:'',
            drole:''
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
    // useEffect(() => {
    //     if (item) {
    //       // Set initial data if item is available
    //       setData({
    //         tname: item.tname || '',
    //         tdesc: item.tdesc || '',
    //         tstart: item.tstart || '',
    //         tend: item.tend || '',
    //         tstatus: item.tstatus || '',
    //         did: item.did || '',
    //         dname: item.dname || '1',
    //       });
    //     }
    //   }, [item]);
    const handlesubmit = async (e) => {
        e.preventDefault()
        const did = item;
        console.log(did);
        try {
            console.log(data)
            const response = await axios.put(`http://localhost:8000/api/dev/update/${did}`,  { demail:data.demail, dname: data.dname, dpass:data.dpass,drole:data.drole });
            console.log(response.data);
           // nav('/admin')
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
                    <form action="#" onSubmit={handlesubmit}>
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Task Name</span>
                                <input type="text" placeholder="Enter task name" name='dname' id='name' value={props.dname} onChange={handleinput}  required />
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="text" placeholder="Enter your Email" name='demail' id='demail' value={props.demail} onChange={handleinput} required />
                            </div>
                            <div class="input-box">
                                <span class="details">Password</span>
                                <input type="password" placeholder="Enter password" name='dpass' id='dpass' value={props.dpass} onChange={handleinput} required />
                            </div>
                           
                            <div class="input-box">
                                <span class="details">Status</span>
                                <input type="text" placeholder="Enter task status" name='drole' id='role' value={props.drole} onChange={handleinput} required />
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
