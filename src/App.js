import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Home from './Pages/home';
import Login from './Pages/login';
import { getLoggedInUser, getToken, isAdmin, isAuthorized } from './Utls/auth';
import { User } from './Pages/user';
function App() {
  // console.log(getToken());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={getLoggedInUser()?.drole === "developer"? <Navigate to={"/user"}/>:<Home />} loader={isAdmin}/>
        <Route path="/login" element={<Login />} loader={isAuthorized} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
