import React,{useState} from 'react'
import '../Components/css/login.css'
import { getToken } from '../Utls/auth'

const Login = () => {
    const [User, setUser] = useState({email: "", password: "",})
    const handlechange=(e)=>{
        setUser({ ...User, [e.target.name]: e.target.value })
    }
    const handlesubmit=async (e)=>{
        // e.preventdefault();
        const response = await fetch("http://localhost:8000/api/dev/login", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ demail: User.email, dpass: User.password })
                    });
    const res = await response.json();
    
    if (res) {
        //save the auth toke to local storage and redirect
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('Authorization', res.token);
        window.location.href = "/"
    }
    else {
        alert("Enter Valid Credentials")
      }
    }
  return (
    <>
    <div class="login-container">
<form onSubmit={handlesubmit}>
<label for="username">Username</label>
<input type="email" id="email" name="email" value={User.email} onChange={handlechange}/>

<label for="password">Password</label>
<input type="password" id="password" name="password" value={User.password} onChange={handlechange}/>

<button type="submit" >Login</button>
</form>
</div>
    </>
  )
}

export default Login