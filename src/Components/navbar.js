import React from 'react'
import './css/navbar.css'
const Navbar = () => {
 const handleLogout=()=>{
  localStorage.removeItem("user");
  localStorage.removeItem("Authorization");
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