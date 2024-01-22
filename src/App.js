import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Home from './Pages/home';
import Login from './Pages/login';
import { getLoggedInUser, getToken, isAdmin, isAuthorized } from './Utls/auth';
import { User } from './Pages/user';
import { Admin } from './Pages/admin';
import { Singletask } from './Pages/singletask';
import { Addnewtask } from './Pages/addnewtask';
function App() {
  // console.log(getToken());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getLoggedInUser()?.drole === "admin"? <Navigate to={"/admin"}/>:<User />} loader={isAdmin}/>
        <Route path="/login" element={<Login />} loader={isAuthorized} />
        <Route path="/user" element={<User/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/SingleTask" element={<Singletask/>} />
        <Route path="/addnewtask" element={<Addnewtask/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
