import React from 'react'
import './css/navbar.css'
const Navbar = () => {
  return (
    <>
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      JoGeek
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
    <a href="/" target="_blank">Admin</a>
    <a href="/" target="_blank">User</a>
  </div>
</div>
    </>
  )
}

export default Navbar