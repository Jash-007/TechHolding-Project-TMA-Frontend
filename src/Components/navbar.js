import React from 'react'
import './css/navbar.css'
const Navbar = () => {
 const handleLogout=()=>{
  localStorage.removeItem("user");
  localStorage.removeItem("Authorization");
  // window.location.reload();
  }
  return (
    <>
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      TMA
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    {/* <a href="//github.io/jo_geek" target="_blank">Github</a>
    <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a> */}
    <a href="/admin" target="_blank">Admin</a>
    <a href="/login" target="_blank" onClick={handleLogout}>Logout</a>
    <a href="/addnewdev" target="_blank">Add Dev</a>
    <a href="/addnewtask" target="_blank">Add Task</a>
  </div>
</div>
    </>
  )
}

export default Navbar